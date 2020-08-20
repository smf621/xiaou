<template>
  <div class="index">
    <div :is="comName" @goods="goods"></div>
  </div>
</template>

<script>
import Index from "@/components/home/Index"
import Goods from "@/components/home/Goods"
export default {
    mounted(){
      let id = this.$route.query.id
      if(id){
        this.comName = "Goods"
      }else{
        this.comName = "Index"
      }
    },
    data(){
      return {
        comName: "Index"
      }
    },
    methods: {
      goods(flag){
        if(flag){
          this.comName = "Index"
        }
      }
    },
  	components: {
      Index,
      Goods
		},
}
</script>

<style scoped lang="stylus">

</style>