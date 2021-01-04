<template>
  <div tabindex="1" class="testFocus" :id="$options.name"
    v-show="true"
  >
      <!-- <div class="el-1" v-show="false"></div> -->
  </div>
</template>

<script>
export default {
  name: 'testFocus',
  data() {
    return {
      
    }
  },
    
  mounted(){
    console.log('testFocus mounted')
    const domView = document.getElementById(this.$options.name)
    domView.onkeydown = event => {
        event.preventDefault()
        const code = event.keyCode
        console.log('testFocus code == ', code)
    }
    domView.focus()
  },
}
</script>

<style>
.testFocus {
  height: 100%;
  width: 100%;
}

.el-1 {
  height: 300px;
  width: 300px;
  background-color: red;
}

</style>