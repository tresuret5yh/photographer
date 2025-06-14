<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Запишись на фотосессию</h2>
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="submitForm" class="form-width">
          <div class="mb-2">
            <label for="name" class="form-label form-label-sm">Имя:</label>
            <input type="text" class="form-control form-control-sm" id="name" v-model="form.name" required />
          </div>
          <div class="mb-2">
            <label for="phone" class="form-label form-label-sm">Телефон:</label>
            <input type="tel" class="form-control form-control-sm" id="phone" v-model="form.phone" required />
          </div>
          <div class="mb-2">
            <label for="email" class="form-label form-label-sm">Email:</label>
            <input type="email" class="form-control form-control-sm" id="email" v-model="form.email" required />
          </div>
          <div class="mb-2">
            <label for="message" class="form-label form-label-sm">Сообщение:</label>
            <textarea class="form-control form-control-sm" id="message" v-model="form.message" rows="2" required></textarea>
          </div>
          <div class="mb-2">
            <label for="service" class="form-label form-label-sm">Услуга (если есть):</label>
            <input type="text" class="form-control form-control-sm" id="service" v-model="form.service" readonly />
          </div>
          <button type="submit" class="btn btn-primary btn-sm">Отправить</button>
        </form>
      </div>
      <div class="col-md-6">
        <img src="@/assets/fo.jpg" alt="Девиз фотографа" class="img-fluid rounded shadow mb-3 photo-size">
        <p class="text-muted">"Моя работа - это не просто профессия, это моя жизнь. Давайте создавать историю вместе - яркую, теплую и незабываемую! Приходи ко мне на фотосессию!"</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useBookingStore } from '@/stores/booking'
import { mapActions } from 'pinia'

export default {
  name: 'ContactsView',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        message: '',
        service: this.$route.query.service || ''
      }
    }
  },
  methods: {
    ...mapActions(useBookingStore, ['addBooking']),
    submitForm() {
      const booking = {
        ...this.form,
        date: new Date().toISOString()
      }
      this.addBooking(booking)
      alert('Ваша заявка принята! Я свяжусь с вами в ближайшее время.')
      this.resetForm()
    },
    resetForm() {
      this.form = {
        name: '',
        phone: '',
        email: '',
        message: '',
        service: ''
      }
    }
  }
}
</script>

<style scoped>
.photo-size {
  max-width: 80%;
  height: auto;
  max-height: 500px; 
  margin: 0 auto;
  display: block;
  margin-bottom: 20px;
}

.col-md-6 {
  padding: 15px;
}

.form-width {
  max-width: 80%; 
}
</style>



