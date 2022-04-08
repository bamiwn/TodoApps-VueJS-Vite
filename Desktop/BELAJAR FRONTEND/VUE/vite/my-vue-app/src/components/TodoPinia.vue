<template>
  <main class="container mt-4">
    <h1>Todo Pinia</h1>

    <input class="form-control" type="text" name="newTodo" v-model="newTodo" />
    <button class="btn btn-dark my-3" type="button" @click="addTodo">Save</button>

    <div class="nav nav-pills d-flex align-items-center mb-3">
      <span class="me-3">Filter:</span>
      <a href="#" class="nav-link" :class="{ active: filter === 'all' }" @click.prevent="filter = 'all'"> Full Data </a>
      <a href="#" class="nav-link" :class="{ active: filter === 'active' }" @click.prevent="filter = 'active'"> Active Data </a>
      <a href="#" class="nav-link" :class="{ active: filter === 'completed' }" @click.prevent="filter = 'completed'"> Data Completed </a>
    </div>

    <ul class="list-group">
      <li v-for="(todo, index) in todoList" :key="index" class="list-group-item">
        <div class="d-flex align-items-center">
          <input type="checkbox" v-model="todo.completed" />
          <span class="mx-2 flex-grow-1" :class="{ done: todo.completed }"> {{ todo.title }}</span>
          <button class="btn btn-danger" @click="removeTodo(index)">Delete</button>
        </div>
      </li>
    </ul>
  </main>
</template>

<script setup>
import { useTodoStore } from '../store/todo';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
const todo = useTodoStore();
const { addTodo, removeTodo } = todo;
const { todos, newTodo } = storeToRefs(todo);
const filter = ref('all');
const todoList = computed(() => {
  if (filter.value === 'completed') return todo.completed;
  if (filter.value === 'active') return todo.active;
  return todos.value;
});
</script>

<style></style>
