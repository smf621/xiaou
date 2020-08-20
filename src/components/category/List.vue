<template>
  <div>
    <ul>
      <li 
      v-for="(item) in secondList" 
      :key="item.id"
      @click="goGoods(item)"
      >
        <img :src="'http://localhost:3000' + item.img">
        <p>{{item.catename}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:['secondList'],
    methods:{
      goGoods(item){
        console.log(item);
        this.$router.push("/home/index?id=" + item.id)
      }
    }
  }
</script>

<style scoped lang="stylus">
  ul
    display flex
    justify-content space-between
    li
      width 30%
      text-align center
      img
        width 100%
        margin 0 auto

</style>