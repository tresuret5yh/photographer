<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">Анна Романова</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Главная</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Обо мне</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/portfolio">Портфолио</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services">Услуги</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacts">Контакты</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.navbar {
  padding: 15px 0;
  transition: all 0.3s;
}
.navbar-brand {
  font-weight: 700;
  font-size: 1.5rem;
}
.nav-link {
  font-weight: 500;
  margin: 0 10px;
}
</style>

