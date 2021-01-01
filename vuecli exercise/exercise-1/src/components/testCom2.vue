<template>
  <div>
    testcomp2
  </div>
</template>

<script>
export default {
  mounted(){
    console.log('testcomp2 mounted')
  },
  beforeUnmount() {
      console.log('testcomp2 beforeUnmount')
  }
}
</script>

<style>

</style>