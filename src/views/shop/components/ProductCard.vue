<script setup>
  import { moneyFormatter } from '@shared/formatters'

  const props = defineProps({
    info: {
      id: Number,
      img: String,
      title: String,
      category: String,
      description: String,
      price: Number,
    },
  })
</script>

<template>
  <div class="product-catd-box">
    <div class="img-description">
      <div>
        <img class="img-style" src="/public/images/product-images/kyrtka.png" alt="" />
      </div>
      <span>{{ info.title }}</span>
      <span class="text-style">{{ info.category }}</span>
      <p class="text-style">
        {{ info.description }}
      </p>
    </div>

    <span>{{ moneyFormatter(info.price) }}</span>
  </div>
</template>

<style scoped>
  .product-catd-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 265px;
    height: 450px;
    background-color: #f2f2f2;
    transition: 0.3s ease-in-out;
    border-radius: 20px;
    padding: 20px 20px;
    &:hover {
      background-color: #e9e9e9;
      cursor: pointer;
    }
  }
  .img-style {
    width: 100%;
  }

  .img-description {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }

  .text-style {
    text-align: center;
    color: rgb(161, 161, 161);
    font-size: 13px;
  }
</style>
