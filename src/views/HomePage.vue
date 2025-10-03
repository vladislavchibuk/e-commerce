<script setup lang="ts">
  const imgCarusel = [
    { src: '/images/img-one.png', alt: 'Товар 1' },
    { src: '/images/img-two.png', alt: 'Товар 2' },
    { src: '/images/img-tree.png', alt: 'Товар 3' },
  ]
</script>

<template>
  <div class="carousel-wrapper">
    <el-carousel :interval="4000" type="card" class="carousel-box">
      <el-carousel-item v-for="(item, index) in imgCarusel" :key="index">
        <img :src="item.src" :alt="item.alt" class="carousel-img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
  .carousel-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .carousel-box {
    border-radius: 20px;
    width: 800px;
    z-index: 0;
    overflow: hidden;
  }

  .carousel-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
