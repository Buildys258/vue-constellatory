<template>
  <div class="nav-bar">
    <div class="scroll-wrapper">
      <div class="nav-wrapper" :style="`width:${navData.length * 20}vw`">
        <nav-item 
          v-for="(item, index) in navData" :key="index"
          :item='item'
          :curIdx='curIdx'
          :index='index'
          @navClick="navClick"
        />
      </div>
    </div>    
  </div>
</template>

<script>

import navData from '@/datas/nav'
import NavItem from './Item'
import getData from '@/servies'

import { reactive, ref, toRefs } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'NavBar',
  components: {
    NavItem
  },
  setup () {
    const curIdx = ref(0),
          state = reactive({
            navData
          }),
          store = useStore()

    const navClick = (index) => {
      curIdx.value = index
      const consName = state.navData[curIdx.value]
      store.commit('setConsName', consName)
      getData(store)
    }
    return {
      ...toRefs(state),
      curIdx,
      navClick
    }
  }
}
</script>

<style lang='scss'>
.nav-bar{
  width: 100%;
  height: 38px;
  border-bottom: 1px solid #dddddd;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;

  .scroll-wrapper {
    height: 44px;
    overflow-x: auto;

    .nav-wrapper {
      display: flex;
      flex-direction: row;
      height: 42px;
    }
  }
}
</style>
