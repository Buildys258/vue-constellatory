<template>
  <div class="container">
      <ConsCard
        :name="tomorrowData.name"
        :allIndex="tomorrowData.all"
      />
      <ConsList 
        :data='tomorrowData'
      />
  </div>
</template>

<script>

import { onMounted, computed, ref, onActivated } from 'vue'
import { useStore } from 'vuex'
import getData from '@/servies'

import ConsList from '@/components/List/Tomorrow'

export default {
  name: 'TomorrowPage',
  components:{
    ConsList
  },
  setup () {
    const store = useStore(),
          state = store.state,
          status = ref('');
    onMounted (() => {
      getData(store)
    })

    onActivated(()=>{
      if (status.value !== state.consName) {
        getData(store)
        status.value = state.consName
      }
    })

    return {
      tomorrowData: computed(() => state.tomorrow)
    }
  }
}
</script>

<style lang="scss">
  
</style>
