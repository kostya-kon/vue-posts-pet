import { defineStore } from "pinia";
import { NewUser } from "../users";

interface UsersState {
  currentUserId?: string
}

export const useUsers = defineStore("users", {
  state: (): UsersState => ({
    currentUserId: undefined,
  }),

  actions: {
    async createUser(newUser: NewUser) {
      const body = JSON.stringify(newUser);
      return await window.fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      // return this.authenticate();
    },
  },
});