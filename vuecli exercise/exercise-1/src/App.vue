<template>
  <div>
    <component
      :is = "currentComponent"
    ></component>
    <button @click="changeCompnent">切换组件</button>
  </div>
</template>

<script>
import mygrid from './components/mygrid'
import mylist from './components/mylist'
import alert from './components/alert/src/main'

export default {
  name: 'App',

  components: {
    mygrid,
    mylist,
    alert
  },

  data() {
    return {
      currentComponent: alert,
      is_mygrid: true
    }
  },

  methods: {
    changeCompnent() {
      this.is_mygrid = !this.is_mygrid
      this.currentComponent = this.is_mygrid ? mygrid : mylist
    }
  },
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
