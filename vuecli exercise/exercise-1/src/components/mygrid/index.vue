<template>
  <div class="grid-wrap" tabindex="1">
      <div class="grid-col" v-for="(colItem, colIndex) in matrix" :key="colIndex">
          <div class="grid-row" v-for="(rowItem, rowIndex) in colItem" :key="rowIndex"
            :class="{active: (curColIndex === colIndex)&&(curRowIndex === rowIndex)}"
          >
              {{rowItem}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        matrix: Array
    },

    data() {
        return {
            curColIndex: 0,
            curRowIndex: 0,
        }
    },

    mounted() {
        console.log('mounted')
        const domView = this.$el
        console.log(domView)
        domView.focus()
        domView.onkeydown = (e) => {
            e.preventDefault()
            const code = e.code
            switch (code) {
                case 'ArrowUp':
                    console.log(this.curColIndex)
                    if(this.curColIndex <= 0){
                        this.curColIndex = this.matrix.length-1
                    }else {
                        this.curColIndex--
                    }
                    break;
                case 'ArrowDown':
                    console.log(this.curColIndex)
                    if(this.curColIndex >= this.matrix.length-1){
                        this.curColIndex = 0
                    }else{
                        this.curColIndex++
                    }
                    break;
                case 'ArrowLeft':
                    if(this.curRowIndex <= 0){
                        this.curRowIndex = this.matrix[0].length-1
                    }else{
                        this.curRowIndex--
                    }
                    break;
                case 'ArrowRight':
                    if(this.curRowIndex >= this.matrix.length-1){
                        this.curRowIndex = 0
                    }else{
                        this.curRowIndex++
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
.grid-wrap {

}

.grid-col {

}
.grid-row {
    display: inline-block;
    padding: 50px;
    width: 20px;
    height: 20px;
    border: 2px solid green;
    text-align: center;
}
.active {
    background-color: blue;
}
</style>