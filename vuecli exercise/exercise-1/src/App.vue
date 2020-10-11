<template>
  <div>
    <mygrid :matrix = '[[1,2,3,4], [5,6,7,8],[9,10,11,12],[13,14,15,16]]'></mygrid>
  </div>
</template>

<script>
import mygrid from './components/mygrid'

export default {
  name: 'App',
  components: {
    mygrid
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
