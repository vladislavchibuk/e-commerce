<script setup>
  import { computed, ref, watch } from 'vue'
  import ProductCard from './components/ProductCard.vue'
  import { id } from 'element-plus/es/locales.mjs'
  import { JSDocParsingMode } from 'typescript'
  import { Search, CloseBold } from '@element-plus/icons-vue'

  const initialCardsList = ref([
    {
      id: 1,
      img: '/public/images/product-images/kyrtka.png',
      title: 'мамина куртка 1',
      category: 'Мужская куртка 1',
      description: 'Описание интересного товара. Она была придуна в 2025 году до нашей эры',
      price: 491210,
    },
    {
      id: 2,
      img: '/public/images/product-images/kyrtka.png',
      title: 'мамина куртка 2',
      category: 'Мужская куртка 2',
      description: 'Описание интересного товара. Она была придуна в 2025 году до нашей эры',
      price: 491210,
    },
    {
      id: 3,
      img: '/public/images/product-images/kyrtka.png',
      title: 'мамина куртка 3',
      category: 'Мужская куртка 3',
      description: 'Описание интересного товара. Она была придуна в 2025 году до нашей эры',
      price: 2690,
    },
  ])

  const filteredCardsList = ref(initialCardsList.value)

  const input = ref('')

  watch(input, newValue => {
    if (newValue.trim() === '') {
      filteredCardsList.value = initialCardsList.value
    }
  })

  const onClickSearch = () => {
    if (!input.value.trim()) {
      filteredCardsList.value = initialCardsList.value

      return
    }

    filteredCardsList.value = initialCardsList.value.filter(item => {
      return item.title.includes(input.value)
    })
  }
</script>

<template>
  <div class="shop-input">
    <el-input
      @keydown.enter="onClickSearch"
      v-model="input"
      clearable
      :clear-icon="CloseBold"
      style="width: 50%"
      placeholder="Введите название товара, которое хотите поискать здесь"
    />
    <el-button @click="onClickSearch" type="primary" :icon="Search">Поискать???</el-button>
  </div>
  <div class="main-shop-card">
    <ProductCard v-for="list in filteredCardsList" :key="list.id" :info="list" />
  </div>
</template>

<style scoped>
  .main-shop-card {
    display: flex;
    justify-content: center;
    margin: 40px auto;
    max-width: 1440px;
    gap: 40px;
    flex-wrap: wrap;
  }

  .shop-input {
    display: flex;
    margin: 40px auto;
    justify-content: center;
    gap: 15px;
  }
</style>
