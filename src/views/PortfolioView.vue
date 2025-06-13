<template>
  <div>
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-5">Мои работы</h2>
        <div class="row mb-4">
          <div class="col-12">
            <ul class="nav nav-pills justify-content-center">
              <li class="nav-item" v-for="category in categories" :key="category.id">
                <button
                  class="nav-link"
                  :class="{ active: activeCategory === category.id }"
                  @click="activeCategory = category.id"
                >
                  {{ category.name }}
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div
            class="col-md-4 col-sm-6 mb-4 portfolio-item"
            v-for="item in filteredPortfolio"
            :key="item.id"
          >
            <div class="card border-0">
              <img :src="item.image" class="card-img-top" :alt="item.title">
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import individ from '@/assets/individ.jpg';
import Свадьба from '@/assets/Свадьба.jpg';
import Семейные from '@/assets/Семейные.jpg';
import HBD from '@/assets/HBD.jpg';
import Lovestory from '@/assets/Lovestory.jpg';
import Partyy from '@/assets/Partyy.jpg';

export default {
  name: 'PortfolioView',
  data() {
    return {
      activeCategory: 'all',
      categories: [
        { id: 'all', name: 'Все работы' },
        { id: 'individual', name: 'Индивидуальные' },
        { id: 'events', name: 'Мероприятия' },
        { id: 'wedding', name: 'Свадьбы' }
      ],
      portfolioItems: [
        {
          id: 1,
          title: 'Индивидуальная съемка',
          description: 'Портретная фотосессия в студии',
          image: individ,
          category: 'individual'
        },
        {
          id: 2,
          title: 'Свадебная съемка',
          description: 'Трогательные моменты свадебного дня',
          image: Свадьба,
          category: 'wedding'
        },
        {
          id: 3,
          title: 'Семейная фотосессия',
          description: 'Теплые семейные моменты',
          image: Семейные,
          category: 'individual'
        },
        {
          id: 4,
          title: 'Корпоративное мероприятие',
          description: 'Фото с корпоратива',
          image: HBD,
          category: 'events'
        },
        {
          id: 5,
          title: 'Love story',
          description: 'Романтическая съемка пары',
          image: Lovestory,
          category: 'individual'
        },
        {
          id: 6,
          title: 'День рождения',
          description: 'Празднование дня рождения',
          image: Partyy,
          category: 'events'
        }
      ]
    }
  },
  computed: {
    filteredPortfolio() {
      if (this.activeCategory === 'all') {
        return this.portfolioItems
      }
      return this.portfolioItems.filter(item => item.category === this.activeCategory)
      }
    }
  }
</script>

<style scoped>
.portfolio-item {
  transition: all 0.3s;
}
.portfolio-item:hover {
  transform: scale(1.02);
}
.nav-pills .nav-link.active {
  background-color: #0d6efd;
}
</style>