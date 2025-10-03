<script setup>
  import axios from 'axios'
  import { ref, onBeforeMount, watch } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import * as ElementPlusIconsVue from '@element-plus/icons-vue'

  const router = useRouter()
  const route = useRoute()

  const menuItems = ref([])
  const currentPathName = ref(route.path)

  watch(
    () => route.path,
    newPath => (currentPathName.value = newPath)
  )

  onBeforeMount(async () => {
    await getMenuItems()
  })

  const onElemClick = pathName => (currentPathName.value = pathName)

  const getMenuItems = async () => {
    try {
      const response = await axios.get('/api/menu-items')

      menuItems.value = response.data
      currentPathName.value = route.path
    } catch (e) {
      console.error(e)
    }
  }

  const clickToLogo = () => {
    router.push({ path: '/home' })
  }
</script>

<template>
  <div class="header-container">
    <div class="header-logo">
      <button @click="clickToLogo">
        <el-icon size="20"><ShoppingCart /></el-icon>
        logo
      </button>
    </div>
    <el-menu :default-active="currentPathName" router mode="horizontal" class="menu">
      <el-menu-item
        v-for="(item, index) in menuItems"
        :key="item.path"
        :index="item.path"
        :class="currentPathName === `/${item.path}` && 'is-active'"
        @click="onElemClick(item.path)"
      >
        {{ item.title }}
      </el-menu-item>
    </el-menu>

    <div class="icons-btns">
      <button>
        <el-icon size="20"><User /></el-icon>
      </button>
      <button>
        <el-icon size="20"><Star /></el-icon>
      </button>
      <button>
        <el-icon size="20"><ShoppingCart /></el-icon>
      </button>
    </div>
  </div>

  <router-view />
</template>

<style scoped>
  *body {
    margin: 0;
    padding: 0;
  }
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
    gap: 30px;
    border-radius: 0px 0px 20px 20px;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 10;
    box-shadow: 0px 5px 10px rgba(128, 128, 128, 0.151);
  }

  .menu {
    flex: 1;
    border-bottom: none;
  }
  .el-menu--horizontal.el-menu {
    border-bottom: none;
  }

  .icons-btns {
    display: flex;
    gap: 10px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .header-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
