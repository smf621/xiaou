<template>
  <div class="goods">
    <header>
      <i class="iconfont icon-zuojiantou" @click="back"></i>
      <img src="../../assets/logo.jpg" alt />
      <i class="iconfont icon-gengduo"></i>
    </header>

    <div class="search-box" >
      <input  type="text" placeholder="搜索商品" v-model="searchVal" @keydown.13="search"/>
      <i  class="iconfont icon-icon-test" v-show="isShow"></i>
    </div>

    <ul>
      <li v-for="(item) in goodsList" :key="item.id" @click="detail(item.id)">
        <div class="img-box">
          <img :src="'http://localhost:3000'+item.img" alt />
        </div>
        <div class="content">
          <p>{{item.goodsname}}</p>
          <p class="price">￥{{item.price}}</p>
          <p class="count">333条评论</p>
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [],
      searchVal:'',
      isShow:true,
    };
  },
  watch:{
    searchVal(newVal){
      if (!newVal){
        this.isShow = true
      }else{
        this.isShow = false
      }
    }
  },
  methods: {
    back(){
      this.$router.back()
    },
    search(){
      this.$http.get('/getgoods',{keyword:this.searchVal}).then(res=>{
        console.log(res)
        this.goodsList = res.data.list
      })
    },
    detail(id){
      this.$http.get('/getgoodsinfo',{id:id}).then(res=>{
        this.$router.push('/detail?id='+id)
      })
    }
  },
  mounted() {
    console.log(this);
    let id = this.$route.query.id;
    this.$http.get("/getgoods", { fid: id }).then((res) => {
      console.log(res);
      this.goodsList = res.data.list;
    });
  },
  watch:{
    $route:{
     deep:true,
     handler(){
       if(this.$route.path == "/home/index"){
         this.$emit('goods',true)
       }  
     } 
    }
  }
};
</script>

<style scoped lang="stylus">
header
  padding 0 0.2rem
  height 0.88rem
  display flex
  justify-content space-between
  align-items center
  img
    width 1.5rem
    height 0.3rem
.goods
  width 100%
  height 100%
  .search-box
    position relative
    width 6.25rem
    height 0.66rem
    /*background color*/
    margin 0 auto
    input
      padding-left 2.8rem
      width 100%
      height 100%
      background color
      border-radius 0.33rem
      border none
      color #fff
      &::placeholder
        color #fff
    i
      position absolute
      left 50%
      top 50%
      transform translate(-200%,-50%)
      color #fff

  /*.search-box*/
  /*  position relative*/
  /*  color #fff*/
  /*  text-align center*/
  /*  input*/
  /*    padding-left 2.8rem*/
  /*    width 6.25rem*/
  /*    height 0.66rem*/
  /*    background color*/
  /*    border-radius 0.9rem*/
  /*    color #fff*/
  /*    &::placeholder*/
  /*      color #fff*/
  /*  i*/
  /*    position absolute*/
  /*    left 3rem*/
  /*    top 0.16rem*/
  ul
    display flex
    flex-direction column
    padding 0 0.23rem
    li
      padding 0.26rem 0
      border-bottom 0.01rem solid #ccc
      display flex
      .img-box
        width 1.65rem
        height 1.55rem
        img
          width 100%
          height 100%
      .content
        display flex
        flex-direction column
        justify-content space-around
        p
          &:first-child
            color #333
        .price
          color color
        .count
          color #999
</style>
