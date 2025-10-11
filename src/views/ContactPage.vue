<script setup>
  const openInst = () => {
    window.open('https://www.instagram.com/vladislav_chibuk?igsh=b2oyNGJqMmJ6N3hw&utm_source=qr')
  }
  const openTegegram = () => {
    window.open('https://t.me/+fLkXUw10UugxOTcy')
  }
  const opneEmail = () => {
    window.location.href = 'mailto:example@example.com'
  }
</script>

<template>
  <div class="contact-main">
    <div class="contact-page">
      <div class="instagram-contact" @click="openInst">
        <h1>INSTAGRAM</h1>
      </div>
      <div class="telegram-contact" @click="openTegegram">
        <h1>TELEGRAM</h1>
      </div>
    </div>
    <div class="contact-page">
      <div class="phone-contact">
        <h1>PHONE</h1>
        <a href="tel:+79999999999">+79999999999</a>
      </div>
      <div class="email-contact" @click="opneEmail">
        <h1>EMAIL</h1>
        <a href="mailto:example@example.com">example@example.com</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .contact-main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 50px auto;
    width: 100vw;
    gap: 50px;
  }
  .contact-page {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vh;
    gap: 50px;
    flex-wrap: wrap;
  }
  .instagram-contact,
  .telegram-contact,
  .phone-contact,
  .email-contact {
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
</style>
