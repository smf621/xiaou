<template>
  <div class="wrap">
    <!-- header -->
    <header class="header">
      <div class="top">
        <i class="iconfont icon-zuo"></i>
        <p>我的订单</p>
        <i class="iconfont icon-19"></i>
      </div>
      <div class="user">
        <div class="photo">
          <a href="#">
            <img src="@/assets/profile/mine.png" alt />
          </a>
        </div>
        <div class="name">
          <p>悠溯</p>
          <p>V1</p>
        </div>
        <button>每日签到</button>
      </div>
    </header>
    <!-- nav -->
    <div class="nav">
      <div>
          <i class="iconfont icon-daifukuan"></i>
          <p>全部订单</p>
      </div>
      <div>
          <i class="iconfont icon-daifukuan"></i>
          <p>待付款</p>
      </div>
      <div>
          <i class="iconfont icon-daifukuan"></i>
          <p>待收货</p>
      </div>
    </div>
    <!-- main -->
    <div class="main">
      <ul>
        <li v-for="(item,index) in arr" :key="index">
          <div>
            <i :class="['iconfont',item.icon]"></i>
          </div>
          <p>{{ item.title }}</p>
          <i class="iconfont icon-you"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          title: "地址管理",
          icon: "icon-daifukuan"
        },
        {
          title: "我的钱包",
          icon: "icon-daifukuan"
        },
        {
          title: "我的优惠券",
          icon: "icon-daifukuan"
        },
        {
          title: "我的二维码",
          icon: "icon-shangpinfenlei"
        },
        {
          title: "我的小伙伴",
          icon: "icon-daifukuan"
        }
      ]
    }
  },
};
</script>

<style lang="stylus" scoped>

.header
  background #f26b11
  .top
    height 1.52rem
    display flex
    justify-content space-between
    padding 0 .29rem .06rem
    display flex
    justify-content space-between
    align-items center
    i
      color #fff
      font-size .5rem
    p
      font 0.35rem / 0.76rem '微软雅黑'
      color #fff
  .user
    display flex
    justify-content space-between
    height 2.06rem
    padding 0 0.38rem 0 0.32rem
    .photo
      width 1.41rem
      height 1.41rem
      background #822e02
      border 0.05rem solid #fff
      border-radius 50%
      overflow hidden
      margin-top 0.28rem
      a
        img
          width 1.3rem
          height 1.41rem
    .name
      width 3.2rem
      margin 0.61rem 0 0 0.56rem
      p
        font 0.3rem / 0.51rem '微软雅黑'
        color #fff
        &:nth-child(2)
          font 0.28rem / 0.44rem '微软雅黑'
          color #2e1904
    button
      width 1.5rem
      height 0.71rem
      background #fff
      border 0
      border-radius 0.04rem
      margin-top 0.74rem
      font 0.26rem / 0.71rem '微软雅黑'
      color color
.nav
  display flex
  justify-content space-between
  height 1.42rem
  background #fff
  padding 0 .5rem
  align-items center
  div
    text-align center
    color #575757
    i
      font-size .35rem
    p
      font 0.24rem / 0.62rem '微软雅黑'
.main
    margin 0.21rem 0 1.2rem 0
    padding-bottom 1.3rem
    background #fff
    ul
        li
            border-bottom 0.01rem solid #d9d9d9
            padding 0 0.37rem
            font 0.26rem / 1.11rem '微软雅黑'
            color #656565
            display flex
            div
              width .5rem
              i 
              
                text-align center
                color color
            .icon-you
              color #656565
            p
              flex 1
            
</style>