<template>
  <div>
    <section class="about-section py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <img src="@/assets/About.jpg" alt="О фотографе" class="img-fluid rounded shadow about-image">
          </div>
          <div class="col-lg-6">
            <h2 class="mb-4">Обо мне</h2>
            <p>Я - Анна Романова, профессиональный фотограф с 5-летним опытом работы.</p>
            <p>Вы искренне сможете раскрыться в кадре и еще долгие годы с теплом вспоминать съемку и рассматривать фотографии.</p>
            <p>Я помогу насладиться процессом съемки и комфортно чувствовать себя перед камерой.</p>
            <p>Фотографии для меня - это искусство, и работа, и увлечение. Это стиль моей жизни.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Мой подход к работе</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="text-center p-4">
              <div class="mb-3">
                <i class="bi bi-camera fs-1 text-primary"></i>
              </div>
              <h4>Индивидуальный подход</h4>
              <p>Для каждого клиента я нахожу особый стиль и атмосферу съемки.</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="text-center p-4">
              <div class="mb-3">
                <i class="bi bi-heart fs-1 text-primary"></i>
              </div>
              <h4>Естественность</h4>
              <p>Моя цель - показать вашу настоящую красоту без лишней искусственности.</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="text-center p-4">
              <div class="mb-3">
                <i class="bi bi-images fs-1 text-primary"></i>
              </div>
              <h4>Качество</h4>
              <p>Использую профессиональное оборудование и тщательно обрабатываю каждый кадр.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about-section {
  padding: 80px 0;
}

.about-image {
  max-width: 70%; 
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>

