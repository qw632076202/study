<template>
  <div>
    testcomp1
  </div>
</template>

<script>
export default {
  mounted(){
    console.log('testcomp1 mounted')
  },
  beforeUnmount() {
      console.log('testcomp1 beforeUnmount')
  }
}
</script>

<style>

</style>