import { defineStore } from 'pinia';

const TodoItem = {
  title: '',
  completed: false,
};

const TodoState = {
  todos: [],
  newTodo: '',
};

export const useTodoStore = defineStore({
  id: 'todos',
  state: () => ({
    todos: [],
    newTodo: '',
  }),
  getters: {
    completed: (state) => state.todos.filter((item) => item.completed),
    active: (state) => state.todos.filter((item) => !item.completed),
  },
  actions: {
    addTodo() {
      this.todos.push({
        title: this.newTodo,
        completed: false,
      });
      this.newTodo = '';
    },
    removeTodo(index) {
      if (confirm('Are you sure want to delete this todo?')) {
        this.todos.splice(index, 1);
      }
    },
  },
});
