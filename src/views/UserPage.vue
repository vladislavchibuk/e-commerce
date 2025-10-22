<script setup>
  import { ref, watch, computed } from 'vue'

  const emailValue = ref('')
  const passlValue = ref('')
  const checkedValue = ref(false)

  // Функции валидации
  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isValidPassword = password => {
    // Пароль должен содержать минимум 6 символов, включая буквы и цифры
    return password.length >= 6 && /[A-Za-z]/.test(password) && /[0-9]/.test(password)
  }

  // Computed свойство для проверки всех условий
  const isFormValid = computed(() => {
    return isValidEmail(emailValue.value) && isValidPassword(passlValue.value) && checkedValue.value
  })

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
    <h1>Регистрация</h1>
    <el-input
      v-model="emailValue"
      style="width: 250px"
      placeholder="Почта"
      clearable
      :class="{ error: emailValue && !isValidEmail(emailValue) }"
    />
    <div v-if="emailValue && !isValidEmail(emailValue)" class="error-message">
      Введите корректный email
    </div>

    <el-input
      class="password"
      v-model="passlValue"
      style="width: 250px"
      type="password"
      placeholder="Пароль"
      clearable
      :class="{ error: passlValue && !isValidPassword(passlValue) }"
    />
    <div v-if="passlValue && !isValidPassword(passlValue)" class="error-message">
      Пароль должен содержать минимум 6 символов, включая буквы и цифры
    </div>
    <div class="btn">
      <div class="check-box">
        <el-checkbox v-model="checkedValue" size="large" />
        Я согласен на
        <a class="policy" @click="clickToPolycy"><strong>любую хуйню</strong></a>
      </div>

      <el-button type="success" style="width: 250px" :disabled="!isFormValid">Success</el-button>
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

  .error-message {
    color: #f56c6c;
    font-size: 12px;
    margin-top: -15px;
    margin-bottom: 10px;
    text-align: left;
    width: 250px;
  }

  .error :deep(.el-input__wrapper) {
    border-color: #f56c6c;
    box-shadow: 0 0 0 1px #f56c6c inset;
  }
</style>
