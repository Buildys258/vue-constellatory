<template>
  <router-link 
    :to="path"
    class="tab-icon"
  >
    <i class="icon">{{ iconText }}</i>
    <p class="text">
      <slot></slot>
    </p>
  </router-link>
</template>

<script>
export default {
  name: 'TabIcon',
  props: {
    iconText: String,
    path: String
  }
}
</script>

<style lang='scss'>
  .tab-icon{
    display: flex;
    text-decoration: none;
    flex-direction: column;
    align-items: center;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: #dddddd;
      color: #999999;
      font-size: 12px;
      font-style: inherit;
      text-align: center;
      margin-top: 2px;
      transition: color .5s;
    }

    &.router-link-active {
      .icon{
        background-color: #DB7093;
        color: #ffffff;
      }

      .text {
        color: #DB7093;
      }
    }

    .text {
      margin: 0;
      font-size: 14px;
      color: #999999;
    }
  }
</style>