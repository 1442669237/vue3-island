<script setup></script>

<template>
  <div class="app-container">
    <RouterView />
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.app-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.router-view {
  flex: 1;
}


.app-container {
  background-color: #FFFFFF;
  color: #333;
}
</style>
