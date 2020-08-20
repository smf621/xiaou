<template>
  <header>
    <i class="iconfont icon-zuojiantou" @click="goBack"></i>
    <slot>
      <p>商品分类</p>
    </slot>
    <i class="iconfont icon-gengduo"></i>
  </header>
</template>

<script>
  export default {
    methods: {
      goBack(){
        this.$router.go(-1)
      }
    },
  }
</script>

<style scoped lang="stylus">
  header
    display flex
    justify-content space-between
    padding 0 .2rem
    width 100%
    height 0.88rem
    line-height 0.88rem
    background color
    color #fff
    font-size .28rem
    
</style>