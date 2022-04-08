<template>
  <h1 class="text-center mt-4">Login</h1>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="onSubmit" class="form-group">
          <label for="email">Email: </label>
          <input v-model="email" type="email" class="form-control mb-2" placeholder="Your Email" />
          <label for="password">Password: </label>
          <input v-model="password" type="password" class="form-control" placeholder="Password" />
          <button class="btn btn-dark mt-3">Submit</button>

          <div class="alert alert-danger" v-if="error">
            {{ error }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../store/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const error = ref('');
const auth = useAuthStore();
const router = useRouter();

const onSubmit = () => {
  error.value = '';
  console.log(auth);
  const res = auth.login(email.value, password.value);
  if (res) {
    router.push('/profile');
  } else {
    error.value = 'Invalid credentials';
  }
};
</script>

<style></style>
