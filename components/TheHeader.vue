<template>
  <header class="theHeader">
    <h1>
      <img class="headerLogo" src="/bc_logo_color.png">
    </h1>
  </header>
</template>

<style lang="scss" scoped>
.theHeader {
  width: 100vw;
  height: 55px;
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;

  .headerLogo {
    width: 120px;
    height: auto;
  }
}
</style>