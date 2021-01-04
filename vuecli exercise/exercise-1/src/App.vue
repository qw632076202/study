<template>
  <div>
    <component
      :is = "currentComponent"
    ></component>
    <!-- <mylist v-show="isShowMyList"></mylist> -->
    <button @click="changeCompnent">切换组件</button>
    <button @click="emitMsg1">发送消息1</button>
    <button @click="emitMsg2">发送消息2</button>
    <!-- <button @click="changeIsShowMyList">changeIsShowMyList</button> -->
    <test-focus></test-focus>
  </div>
</template>

<script>
import mygrid from './components/mygrid'
import mylist from './components/mylist'
// import alert from './components/alert/src/main'
import testcom1 from './components/testCom1'
import testcom2 from './components/testCom2'
import testFocus from './components/testFocus'

export default {
  name: 'App',

  components: {
    mygrid,
    mylist,
    testcom1,
    testcom2,
    testFocus
  },

  data() {
    return {
      currentComponent: '',
      is_mygrid: true,
      isShowMyList: true
    }
  },

  mounted() {
    console.log('App mounted')
  },

  methods: {
    changeCompnent() {
      this.is_mygrid = !this.is_mygrid
      // this.currentComponent = this.is_mygrid ? "mygrid" : "mylist"
      this.currentComponent = this.is_mygrid ? "testcom1" : "testcom2"
    },

    emitMsg1() {
      this.$root.eventBus.$emit('testcomp1')
    },

    emitMsg2() {
      this.$root.eventBus.$emit('testcomp2')
    },

    changeIsShowMyList() {
      this.isShowMyList = !this.isShowMyList
      console.log('isShowMyList == ', this.isShowMyList)
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
