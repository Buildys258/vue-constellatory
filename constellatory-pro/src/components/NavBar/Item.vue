<template>
  <div 
    :class="['nav-item', { 'nav-current': index === curIdx }]"
    @click="navClick(index)"
  >
    {{ item }}
  </div>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    item: String,
    curIdx: Number,
    index: Number
  },
  setup(props, { emit }) { // ctx 或者解构（emit）
    const navClick = (index) => {
      // ctx.emit('navClick', index)
      emit('navClick', index)
    }

    return {
      navClick
    }
  }
}
</script>

<style lang='scss'>
.nav-item {
  width: 75px;
  height: 100%;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  color: #666666;
  display: inline-block;

  &.nav-current {
    color: #DB7093;
    font-weight: bold;
  }
}
</style>
