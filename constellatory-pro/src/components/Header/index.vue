<template>
  <header class="header">
    <img src="../../assets/img/cons.png" alt="">
    <span>
      <slot></slot>
    </span>
  </header>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style lang="scss">
  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    // position: fixed;
    // top: 0;
    // left: 0;
    // z-index: 1;
    width: 100%;
    height: 44px;
    background-color: #DB7093;
    color: #ffffff;

    span{
      font-size: 18px;
    }  

    img {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }
  }
</style>