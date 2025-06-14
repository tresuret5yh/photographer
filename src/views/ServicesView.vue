<template>
  <div>
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-5">Мои услуги</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="service in services" :key="service.id">
            <div class="card h-100">
              <div class="card-header bg-primary text-white">
                <h4 class="mb-0">{{ service.name }}</h4>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush mb-3">
                  <li class="list-group-item"><strong>Время съемки:</strong> {{ service.duration }}</li>
                  <li class="list-group-item"><strong>Обработанные фото:</strong> {{ service.photos }}</li>
                  <li class="list-group-item"><strong>Исходники:</strong> {{ service.raw ? 'Да' : 'Нет' }}</li>
                  <li class="list-group-item">
                    <strong>Визажист/стилист:</strong> {{ service.makeup ? 'Включено' : 'За дополнительную плату' }}
                  </li>
                  <li class="list-group-item"><small>Студия оплачивается отдельно</small></li>
                </ul>
                <h5 class="card-title text-center">{{ service.price }} ₽</h5>
              </div>
              <div class="card-footer bg-transparent text-center">
                <button class="btn btn-primary" @click="bookService(service)">Бронировать</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h3>Дополнительные услуги</h3>
            <ul class="list-group mb-4">
              <li class="list-group-item">Ретушь фотографий - 500₽/шт</li>
              <li class="list-group-item">Фотокнига - от 3000₽</li>
              <li class="list-group-item">Срочная обработка (24 часа) - +50% к стоимости</li>
              <li class="list-group-item">Выездная съемка - обсуждается индивидуально</li>
            </ul>
          </div>
          <div class="col-lg-6">
            <img
              src="@/assets/Photografe.jpg"
              alt="Дополнительные услуги"
              class="img-fluid rounded shadow small-image"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ServicesView',
  data() {
    return {
      services: [
        {
          id: 1,
          name: 'Лайт',
          duration: '1 час',
          photos: '15 шт',
          raw: true,
          makeup: false,
          price: '12 000'
        },
        {
          id: 2,
          name: 'Стандарт',
          duration: '2 часа',
          photos: '25 шт',
          raw: true,
          makeup: true,
          price: '16 000'
        },
        {
          id: 3,
          name: 'Премиум',
          duration: '4 часа',
          photos: '50 шт',
          raw: true,
          makeup: true,
          price: '21 000'
        }
      ]
    }
  },
  methods: {
    bookService(service) {
      this.$router.push({
        name: 'contacts',
        query: { service: service.name }
      })
    }
  }
}
</script>

<style scoped>
.card {
  transition: all 0.3s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.small-image {
  max-width: 70%; 
  height: auto;
  display: block; 
  margin: 0 auto; 
}
</style>