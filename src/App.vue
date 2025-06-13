<template>
  <HeaderComponent />
  <main class="main-content">
    <router-view />
  </main>
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>

.main-content {
  min-height: calc(100vh - 120px);
  padding-top: 80px;
}

</style>
