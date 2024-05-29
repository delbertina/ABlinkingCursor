<script setup lang="ts"></script>

<template>
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <RouterLink class="nav-brand" to="/">
        <h3>A Blinking Cursor</h3>
      </RouterLink>
      <ul class="navbar-nav d-flex">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/settings">
            <i class="bi-gear-fill" />
          </RouterLink>
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
