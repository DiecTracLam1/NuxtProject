// Pinia Store
import { defineStore } from "pinia";
import { User } from "~/model/user";

export const useUserStore = defineStore("User", {
  state: () => {
    let userStorage: any;
    if (process.client) {
      userStorage = localStorage.getItem("user");
      // console.log("User", userStorage);
    }
    // console.log("UserOutside" , userStorage);
    return {
      data: {
        access_token: userStorage?.access_token ?? "",
        user: userStorage?.user as User | null,
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
        localStorage.setItem("user", JSON.stringify(this.data));
      } catch (error: any) {
        throw new Error(error.message);
      } finally {
        this.loading = false;
      }
    },

    logout(){
      this.$reset();
    }
  },
});
