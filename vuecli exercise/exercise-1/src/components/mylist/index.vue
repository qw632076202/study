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
        const domView = this.$el;
        console.log(domView)
        domView.focus()
        domView.onkeydown = (event) => {
            event.preventDefault()
            const code = event.code
            console.log(code)

            switch (code) {
                case 'ArrowUp':
                    if(this.curIndex <= 0) {
                        this.curIndex = this.items.length -1
                    }else {
                        this.curIndex--
                    }
                    break;
                case 'ArrowDown':
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