// Pinia Store
import { defineStore } from "pinia";
import { User } from "~/model/user";

export const useUserStore = defineStore("User", {
  state: () => {
    // hh
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
    // async loadUser (id: number) {
    //   if (this.userId !== null) throw new Error('Already logged in')
    //   const res = await api.user.load(id)
    //   this.updateUser(res)
    // },
    // updateUser (payload) {
    //   this.firstName = payload.firstName
    //   this.lastName = payload.lastName
    //   this.userId = payload.userId
    // },
    // clearUser () {
    //   this.$reset()
    // }

    async loginUser(username: string, password: string) {
      this.loading = true;
      try {
        this.data = await $fetch("/api/auth/login", {
          method: "POST",
          body: { username, password },
        });
        localStorage.setItem('user' , JSON.stringify(this.data))
      } catch (error: any) {
        throw new Error(error.message);
      } finally {
        this.loading = false;
      }
    },

    // logout(){
    //   this.data = {};
    // }
  },
});
