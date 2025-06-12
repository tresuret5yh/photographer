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