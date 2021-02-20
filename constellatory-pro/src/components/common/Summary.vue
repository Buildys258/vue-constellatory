<template>
  <div class="summary-wrapper">
    <div class="inner">
      <header class="header">
        {{ filed }}运势总结
      </header>
      <div class="content">
        {{ contnet || '加载中...' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  props: {
    filed: String,
    contnet: String
  }
}
</script>

<style lang='scss'>
.summary-wrapper {
  margin-bottom: 4vw;
  box-sizing: border-box;

  .inner {
    border-radius: 5px;
    border: 1px solid #dddddd;

    .header {
      height: 35px;
      background-color: #C71585;
      color: #ffffff;
      font-size: 16px;
      text-align: center;
      line-height: 35px;
    }

    .content{
      background-color: #ffffff;
      font-size: 14px;
      padding: 10px;
      text-indent: 2em;
      line-height: 20px;
    }
  }
}
</style>
