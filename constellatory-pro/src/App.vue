<template>
  <div>
    <my-header>星座物语</my-header>
    <nav-bar />
    <ErrorTip />
    <router-view v-slot="{ Component }" v-if="!errorCode">
      <keep-alive>
        <component :is='Component'></component>
      </keep-alive>
    </router-view>
    <tab></tab>
  </div>
</template>

<script>
import MyHeader from '@/components/Header'
import Tab from '@/components/Tab'
import NavBar from '@/components/NavBar'
import ErrorTip from '@/components/ErrorTip'

import { watch, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  components: {
    MyHeader,
    Tab,
    NavBar,
    ErrorTip
  },
  setup () {
    const store = useStore()
    const state = store.state
    const router = useRouter()

    router.push('/')
    store.commit('setFiled', 'today')

    watch(() => {
      return router.currentRoute.value.name
    },(value) => {
      store.commit('setFiled', value)
    })

    return {
      errorCode: computed(() => store.state.errorCode)
    }
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    background-color: #F9FBFC;
  }
  .container{
    margin-bottom: 50px;
  }
</style>
