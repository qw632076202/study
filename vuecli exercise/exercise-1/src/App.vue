<template>
  <div>
<<<<<<< HEAD
    <!-- <mygrid :matrix = '[[1,2,3,4], [5,6,7,8],[9,10,11,12],[13,14,15,16]]'></mygrid> -->
    <mylist :items="[1,2,3]"></mylist>
=======
    <component
      :is = "currentComponent"
    ></component>
    <button @click="changeCompnent">切换组件</button>
>>>>>>> a60f88c9a1a999e7c949430f21edb965d68e3548
  </div>
</template>

<script>
<<<<<<< HEAD
// import mygrid from './components/mygrid'
import mylist from './components/mylist'
=======
import mygrid from './components/mygrid'
import mylist from './components/mylist'
import alert from './components/alert/src/main'

>>>>>>> a60f88c9a1a999e7c949430f21edb965d68e3548
export default {
  name: 'App',

  components: {
<<<<<<< HEAD
    mylist
  }
=======
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
>>>>>>> a60f88c9a1a999e7c949430f21edb965d68e3548
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
