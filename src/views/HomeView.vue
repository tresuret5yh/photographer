<template>
  <div>
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-4">Анна Романова</h1>
            <p class="lead mb-4">Профессиональный фотограф</p>
            <p>Я покажу Вас настоящими, сохраню самые трогательные моменты и найду подход к каждому клиенту.</p>
            <router-link to="/contacts" class="btn btn-primary btn-lg mt-3">Записаться на съемку</router-link>
          </div>
          <div class="col-lg-6">
            <img src="@/assets/main.jpg" alt="Фотограф Анна Романова" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-5">Мои работы</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(work, index) in featuredWorks" :key="index">
            <div class="card h-100">
              <img :src="work.image" class="card-img-top" :alt="work.title">
              <div class="card-body">
                <h5 class="card-title">{{ work.title }}</h5>
                <p class="card-text">{{ work.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <router-link to="/portfolio" class="btn btn-outline-primary">Смотреть все работы</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      featuredWorks: [
        {
          title: 'Индивидуальная съемка',
          description: 'Портретная фотосессия в студии',
          image: require('@/assets/Home1.jpg')
        },
        {
          title: 'Свадебная съемка',
          description: 'Трогательные моменты свадебного дня',
          image: require('@/assets/Home2.jpg')
        },
        {
          title: 'Семейная фотосессия',
          description: 'Теплые семейные моменты',
          image: require('@/assets/Home3.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.hero-section {
  padding: 100px 0;
  background-color: #f8f9fa;
}
.card {
  transition: transform 0.3s;
}
.card:hover {
  transform: translateY(-5px);
}
</style>
 