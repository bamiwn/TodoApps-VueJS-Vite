<script setup>
import { useUserStore } from '../store/user';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const user = useUserStore();
const { users } = storeToRefs(user);
const { getAllUsers } = user;

onMounted(() => {
  getAllUsers();
});
</script>

<template>
  <div class="container mt-4">
    <h1>User List</h1>

    <table class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button class="btn btn-secondary me-2">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>
