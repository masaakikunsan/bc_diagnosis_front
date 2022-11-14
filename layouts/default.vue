<template>
  <div>
    <TheHeader />
    <main class="conteiner">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'body-style'
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  position: relative;
  min-height: 100vh;
  background-color: #f4f6fa;
}

.conteiner {
  padding-top: 120px;
}
</style>