<template>
  <div>
    <nav class="nav-container">
      <RouterLink to="/">Dashboard</RouterLink>
      <RouterLink to="/toastify">JToastify</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>
<style>
.nav-container {
  /* position: fixed;
  top: 20px;
  width: 1280px; */
  display: flex;
  justify-content: center;
  gap: 20px;
  text-align: left;
}
</style>

