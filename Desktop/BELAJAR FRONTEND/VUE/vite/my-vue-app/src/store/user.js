import { defineStore } from 'pinia';
import axios from 'axios';

const User = {
  id: '',
  name: '',
  email: '',
};

const UserState = {
  users: [],
};

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
  }),
  getters: {},
  actions: {
    async getAllUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {
          this.users = json;
        });
      // const res = await axios.get('/users');
      // this.users = res.data;
    },
  },
});
