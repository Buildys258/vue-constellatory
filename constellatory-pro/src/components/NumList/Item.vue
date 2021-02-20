<template>
  <div class="num-item" :style="`background-color: ${item.bgColor}`">
    <span>{{ item.title }}</span>
    <p>{{ data[item.filed] || 0 }}</p>
  </div>
</template>

<script>
export default {
  name: 'NumItem',
  props: {
    item: Object,
    data: Object
  }
}
</script>

<style lang='scss'>
.num-item {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  color: #666666;

  span {
    font-size: 16px;
  }

  p {
    font-size: 20px;
    margin: 0;
    margin-top: 10px;
  }
}
</style>
