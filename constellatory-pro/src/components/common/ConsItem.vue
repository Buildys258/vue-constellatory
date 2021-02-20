<template>
  <div class="cons-item">
    <div class="title">{{ title }}</div>
    <div class="content">
      {{ content ||'加载中...' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConsItem',
  props: {
    title: String,
    content: String | Number
  }
}
</script>

<style lang='scss'>
.cons-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 44px;
  border-radius: 5px;
  margin-bottom: 15px;
  font-size: 16px;
  background-color: #ffffff;
  border: 1px solid #888787;
  .title {
    width: 90px;
    height: 44px;
    color: #C71585;
    text-align: center;
    line-height: 44px;
    font-weight: 600;
  }

  .content {
    font-size: 16px;
    color: #666666;
  }
}
</style>
