import { defineStore } from 'pinia'

export const useBookingStore = defineStore('booking', {
  state: () => ({
    bookings: [],
    selectedService: null
  }),
  actions: {
    addBooking(booking) {
      this.bookings.push(booking)
    },
    selectService(service) {
      this.selectedService = service
    },
    clearSelectedService() {
      this.selectedService = null
    }
  }
})