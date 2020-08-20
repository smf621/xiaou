<template>
  <div class="home">

    <main>
      <router-view></router-view>
    </main>
    <footer>
      <router-link to="/home/index" tag="div">
        <i class="iconfont icon-shouye"></i>
        <p>首页</p>
      </router-link>
      <router-link to="/home/cart" tag="div">
        <i class="iconfont icon-gouwuchezhengpin"></i>
        <p>购物车</p>
      </router-link>
      <router-link to="/home/my" tag="div">
        <i class="iconfont icon-wode2"></i>
        <p>我的</p>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
.home
  width 100%
  height 100%
  overflow hidden
  display flex
  flex-direction column
  main
    flex 1
    overflow-y auto
  
  footer
    display flex
    width 100%
    height 1rem
    background #fff
    border-top 0.02rem solid #ccc
    align-items center
    div
      flex 1
      text-align center
      color #7e7e7e
      &.router-link-active
        color color
</style>