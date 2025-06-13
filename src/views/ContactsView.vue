<template>
  <div class="container mt-5">
    <h2>Связаться со мной</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Имя:</label>
        <input type="text" class="form-control" id="name" v-model="form.name" required />
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Телефон:</label>
        <input type="tel" class="form-control" id="phone" v-model="form.phone" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input type="email" class="form-control" id="email" v-model="form.email" required />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Сообщение:</label>
        <textarea class="form-control" id="message" v-model="form.message" rows="5" required></textarea>
      </div>
      <div class="mb-3">
        <label for="service" class="form-label">Услуга (если есть):</label>
        <input type="text" class="form-control" id="service" v-model="form.service" readonly />
      </div>
      <button type="submit" class="btn btn-primary">Отправить</button>
    </form>
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
</style>

