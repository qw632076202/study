<template>
  <div class="list-wrap" tabindex="1">
      <div class="list-item" v-for="(item, index) in items" :key="index"
        :class="{active: curIndex === index}"
      >
          {{item}}
      </div>
  </div>
</template>

<script>
export default {
    name: 'mylist',
    props: {
        items: Array,
    },

    data() {
        return {
            curIndex: 0
        }
    },

    mounted() {
        this.func1()
        const domView = this.$el
        domView.focus()
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