<template>
  <footer class="bg-dark text-white py-4">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5>Анна Романова - профессиональный фотограф</h5>

        </div>
        <div class="col-md-6 text-md-end">
          <h5>Контакты</h5>
          <p>Томск, ул. Новокузнецкая, 72</p>
          <p>Телефон: +7 (978) 785-98-39</p>
          <p>Email: anna_romanova@gmail.com</p>
        </div>
      </div>
      <div class="text-center mt-3">
        <p>&copy; {{ new Date().getFullYear() }} Анна Романова. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
footer {
  margin-top: 50px;
}
</style>

