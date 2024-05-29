<script setup lang="ts"></script>

<template>
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/#">A Blinking Cursor</a>
      <ul class="navbar-nav d-flex">
        <li class="nav-item">
          <a class="nav-link" href="settings/#">
            <i class="bi-gear-fill" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="app-wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.app-wrapper {
  margin: 0 1vw;
}
</style>
