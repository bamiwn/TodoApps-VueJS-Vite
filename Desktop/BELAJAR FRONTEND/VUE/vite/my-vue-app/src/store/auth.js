import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      loggedIn: false,
      user: null,
    };
  },
  getters: {},
  actions: {
    login(email, password) {
      console.log(email, password);
      if (email === 'admin@example.com' && password === 'secret') {
        this.loggedIn = true;
        this.user = {
          name: 'John Doe',
          email: '',
        };

        return true;
      }
      return false;
    },
    logout() {
      this.loggedIn = false;
      this.user = null;
    },
  },
});
