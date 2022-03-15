<template>
  <section name="todo">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-sm-8">
          <div name="card-todo-task" class="card shadow">
            <div class="card-body">
              <h2 class="card-title text-center mt-4 color-first">Todo Apps - Bambangiwn</h2>

              <div class="input-group mt-4">
                <input v-model="taskDescription" @keyup.enter.prevent="create()" type="text" class="form-control" />
                <button @click.prevent="create()" class="btn btn-first">Here we Go!</button>
              </div>
              <hr />
              <div name="todo-items">
                <div v-for="item in storageTask" :key="item.id" :id="item.id" :class="{ 'd-none': !item.id }" class="card mt-3">
                  <div class="card-body">
                    <h4 class="card-title">Task-{{ item.id }}</h4>
                    <h5>
                      Bambang Irawan,
                      {{ new Date().getDate() }}- {{ new Date().getMonth() }}-
                      {{ new Date().getFullYear() }}
                      ({{ new Date().getHours() }}:{{ new Date().getMinutes() }} WIB)
                    </h5>
                    <p class="card-text">{{ item.task }}</p>
                  </div>
                  <button @click.prevent="destroy(item.id)" class="btn btn-firstly">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                      <path
                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      storageTask: [],
      idTask: 1,
      taskDescription: '',
      timeTask: `${new Date().getUTCHours()}:${new Date().getUTCMinutes()} WIB`,
    };
  },
  methods: {
    create() {
      this.storageTask.push({
        id: this.idTask++,
        task: this.taskDescription,
        time: this.timeTask,
      });
    },
    destroy(taskID) {
      if (confirm('Are you sure want deleting the data?')) {
        this.storageTask[taskID - 1] = {};
      }
    },
  },
};
</script>

<style>
[name='todo'] {
  padding: 100px 0 500px;
  background-image: url('../assets/img/bg.png');
}

[name='card-todo-task'] {
  border-radius: 17px;
}

body {
  font-family: 'Handlee', cursive !important;
}

.color-first {
  color: #71c9ce !important;
}

.btn-first {
  color: white;
  background-color: #71c9ce !important;
}

.btn-first:hover {
  color: white;
}

.btn-firstly {
  height: 45px;
  width: 45px;
  margin: 20px 0 15px 15px;
  color: #393e46;
  border-radius: 100px;
  background-color: #a6e3e9 !important;
}

.btn-firstly:hover {
  color: #393e46;
  background-color: #71c9ce !important;
}
</style>
