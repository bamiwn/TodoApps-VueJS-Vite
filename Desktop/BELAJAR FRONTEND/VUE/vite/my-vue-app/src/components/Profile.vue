<template>
  <h1>Profile</h1>
  <button @click="logout" class="btn btn-danger">Logout</button>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth';
import { storeToRefs } from 'pinia';

const auth = useAuthStore();
const { user } = storeToRefs(auth);
const router = useRouter();

const logout = () => {
  auth.logout();
  router.push('/');
};
</script>

<style></style>
