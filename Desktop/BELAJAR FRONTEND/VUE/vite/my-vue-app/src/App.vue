<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="mx-auto navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/todo-apps">Todo Apps</router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view />

  <footer class="bg-dark text-center pt-4">
    <p class="text-muted fw-bold">&copy; Copyright By @Bambangiwn 2022</p>
  </footer>
</template>
