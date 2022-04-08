<template>
  <section name="todo">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-sm-8">
          <div name="card-todo-task" class="card shadow">
            <div class="card-body">
              <h2 class="text-center mt-4 color fw-bolder">Todo Apps - Bambangiwn</h2>

              <div name="input-task" class="mt-4">
                <textarea v-model="taskDescription" @keyup.enter.prevent="create()" type="text" class="form-control" />
                <button v-show="taskDescription" @click.prevent="create()" class="btn bg-color mt-3">Here we Go!</button>
              </div>
              <hr />
              <div v-if="taskFinished" class="alert alert-danger">{{ taskFinished }}</div>
              <div name="todo-items">
                <div v-for="item in storageTask" :key="item.id" :id="item.id" :class="{ 'd-none': !item.id }" class="card mt-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h4 :class="{ 'text-decoration-line-through': item.finished }" class="fw-bold">Task-{{ item.id }}</h4>
                      <div class="form-check">
                        <input v-model="item.finished" type="checkbox" class="form-check-input" />
                      </div>
                    </div>
                    <p class="text-muted">
                      Bambang Irawan,
                      {{ new Date().getDate() }}- {{ new Date().getMonth() }}-
                      {{ new Date().getFullYear() }}
                    </p>
                    <p :class="{ 'text-decoration-line-through': item.finished }" class="text-muted">
                      {{ item.task }}
                    </p>
                  </div>
                  <div class="d-flex">
                    <button name="destroy" @click.prevent="destroy(item.id)" class="btn bg-color">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path
                          d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      storageTask: [],
      idTask: 1,
      taskDescription: '',
      taskFinished: false,
    };
  },
  methods: {
    create() {
      this.storageTask.push({
        id: this.idTask++,
        task: this.taskDescription,
        finished: this.taskFinished,
      });

      this.taskDescription = '';
    },
    destroy(taskID) {
      if (confirm('Are you sure want deleting the data?')) {
        this.storageTask[taskID - 1] = {};
      }
    },
    changeAlert(value) {
      this.taskFinished = value;
    },
  },
  watch: {
    storageTask: {
      handler(newValue, oldValue) {
        console.log(oldValue);
      },
      deep: true,
    },
    taskDescription(newValue, oldValue) {
      console.log(oldValue);
    },
  },
  mounted() {
    // this.taskFinished = true;
    this.changeAlert(true);
  },
};
</script>

<style>
@import '../assets/css/mystyle.css';
</style>
