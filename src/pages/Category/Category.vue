<template>
  <div class="category">
    <CommonHead>
      <p>商品分类</p>
    </CommonHead>

    <main>
      <div class="left-list">
        <ul>
          <li v-for="(item,index) in categoryList" :key="item.id" :class="{active:index == ind}" @click="changeIndex(index)">
            {{item.catename}}
          </li>
        </ul>
      </div>
      <div class="right-list">
        <List v-if="categoryList.length > 0" :secondList="categoryList[ind].children">
        </List>
      </div>
    
    </main>
  </div>
</template>

<script>
import CommonHead from '@/components/common/commonHead'
import List from '@/components/category/List'
  export default {
    data(){
      return {
        ind:0,
        categoryList:[]
      }
    },
    methods:{
      changeIndex(i){
        this.ind = i
      }
    },
    mounted() {
      this.$http.get('/getcatetree').then(res=>{
        console.log(res);
        this.categoryList = res.data.list
      })
    },
    components:{
      CommonHead,
      List
    }
    
  }
</script>

<style scoped lang="stylus">
  .category
    display flex
    flex-direction column
    height 100%
    width 100%
    main
      flex 1
      display flex
      overflow-y auto
      .left-list
        width 1.6rem
        border-right 0.02rem solid #ccc
        ul
          li
            margin 0.25rem 0 
            width 100%
            height .52rem
            line-height .52rem
            text-align center
            color #000
            border-left .04rem solid transparent
            &.active
              border-left 0.04rem solid color
      .right-list
        flex 1
        
      
</style>