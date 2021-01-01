<template>
  <div class="list-wrap" tabindex="1"
       v-if="isShow"
  >
      <div class="list-item" v-for="(item, index) in items" :key="index"
        :class="{active: curIndex === index}"
      >
          {{item}}
      </div>
  </div>
</template>
<script>
import { data } from './data.json'
export default {
    name: 'mylist',

    watch: {
      isShow(val) {
        console.log('watch isShow == ', val)
      }
    },

    props: {
      isShow: {
        type: Boolean,
        default: true
      }
    },

    data() {
        return {
            items: data,
            curIndex: 0
        }
    },

    mounted() {
        console.log('mylist mounted')
        this.func1()
        const domView = this.$el
        // domView.focus()
        domView.onkeydown = (event) => {
            event.preventDefault()
            switch (event.keyCode) {
                case 38:
                    if(this.curIndex <= 0) {
                        this.curIndex = this.items.length -1
                    }else {
                        this.curIndex--
                    }
                    break;
                case 40:
                    if(this.curIndex >= this.items.length -1) {
                        this.curIndex = 0
                    }else {
                        this.curIndex++
                    }                    
                    break;
                default:
                    break;
            }
        }
    },

    beforeUnmount() {
        console.log('mylist beforeUnmount')
    },

    methods: {
       func1() {
         return 1
       }
    }
}
</script>

<style>
.list-wrap {
    width: 500px;
    background-color:white;
}
.list-item {
    
}
.active {
    background-color:blue;
}
</style>