<template>
  <div>
    <!-- <mygrid :matrix = '[[1,2,3,4], [5,6,7,8],[9,10,11,12],[13,14,15,16]]'></mygrid> -->
    <mylist :items="[1,2,3]"></mylist>
  </div>
</template>

<script>
// import mygrid from './components/mygrid'
import mylist from './components/mylist'
export default {
  name: 'App',
  components: {
    mylist
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
