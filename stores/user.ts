// Pinia Store
import { defineStore } from "pinia";
import { User } from "~/model/user";

export const useUserStore = defineStore("User", {
  state: () => {
    return {
      data: {
        access_token: "",
        user: null as User | null,
      },
      loading: false,
      error: "",
    };
  },

  getters: {
    loggedIn: (state): string | undefined => state.data?.user?.id,
    getImage(state): string | undefined {
      return state.data.user?.profileImage;
    },
    getLoading(state): boolean {
      return state.loading;
    },
  },
  actions: {
    async loginUser(username: string, password: string) {
      this.loading = true;
      try {
        this.data = await $fetch("/api/auth/login", {
          method: "POST",
          body: { username, password },
        });
      } catch (error: any) {
        throw new Error(error.message);
      } finally {
        this.loading = false;
      }
    },

    async registerUser(
      username: string,
      password: string,
      repeatPassword: string,
      phoneNumber: number
    ) {
      this.loading = true;
      try {
        this.data = await $fetch("/api/auth/register", {
          method: "POST",
          body: { username, password, repeatPassword, phoneNumber },
        });
      } catch (error: any) {
        throw new Error(error.message);
      } finally {
        this.loading = false;
      }
    },

    async updateUser(values: any) {
      try {
        this.loading = true;
        this.data = await $fetch("/api/auth/update", {
          headers: { Authorization: `Bearer ${this.$state.data.access_token}` },
          method: "PUT",
          body: values,
        });
        console.log(this.data);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        this.loading = false;
      }
    },

    async updatePassword(values: any) {
      try {
        this.data = await $fetch("/api/auth/resetPassword", {
          headers: { Authorization: `Bearer ${this.$state.data.access_token}` },
          method: "PUT",
          body: { ...values },
        });
      } catch (error) {}
    },

    logout() {
      this.$reset();
      navigateTo({
        path: "/",
      });
    },
  },

  persist: [
    {
      paths: ["data.user"],
      storage: persistedState.localStorage,
    },
    {
      paths: ["data.access_token"],
      storage: persistedState.cookiesWithOptions({
        sameSite: "strict",
      }),
    },
  ],
});
