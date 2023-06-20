// Pinia Store
import { defineStore } from "pinia";

interface User {
  id: string;
  name: string | null;
  email: string | null;
  username: string | null;
  phone: number | null;
  profileImage: string;
}

export const useUserStore = defineStore("User", {
  state: () => {
    return {
      data: null as User | null,
      loading: false,
    };
  },
  getters: {
    loggedIn: (state): string | undefined => state.data?.id,
    getImage(state): string | undefined {
      return state.data?.profileImage;
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
  },
});
