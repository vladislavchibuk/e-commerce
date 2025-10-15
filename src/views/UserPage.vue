<script setup>
  import { ref, watch } from 'vue'

  const emailValue = ref('')
  const passlValue = ref('')
  const checkedValue = ref('')

  watch(checkedValue, newValie => {
    console.log(newValie)
  })

  const clickToPolycy = () => {
    window.open(
      'https://www.consultant.ru/document/cons_doc_LAW_61801/6c94959bc017ac80140621762d2ac59f6006b08c/'
    )
  }
</script>

<template>
  <div class="login">
    <h1>Вход</h1>
    <el-input v-model="emailValue" style="width: 250px" placeholder="Почта" clearable />
    <el-input
      class="password"
      v-model="passlValue"
      style="width: 250px"
      type="password"
      placeholder="Пароль"
      clearable
    />
    <div class="btn">
      <div class="check-box">
        <el-checkbox v-model="checkedValue" size="large" />
        Даю согласие на
        <a class="policy" @click="clickToPolycy"><strong>всю хуйню</strong></a>
      </div>

      <el-button type="success" style="width: 250px" :disabled="!checkedValue && !emailValue">
        Success
      </el-button>
    </div>
  </div>
</template>

<style scoped>
  .login {
    margin: 50px auto;
    display: flex;
    width: 300px;
    height: 500px;
    border-radius: 20px;
    background-color: rgb(233, 235, 235);
    align-items: center;
    flex-direction: column;
    padding: 20px 20px;
    gap: 25px;
  }
  .btn {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .policy {
    cursor: pointer;
  }
</style>
