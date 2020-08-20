<template>
  <div>
    <input type="text" placeholder="手机号" v-model="phone">
    <br>
    <input type="text" placeholder="密码" v-model="password">
    <br>
    <button @click="logn">登录</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        phone:'',
        password:''
      }
    },
    methods:{
      logn(){
        this.$http.post('/login',{
          phone:this.phone,
          password: this.password
        }).then(res=>{
          console.log(res)
          // localStorage.setItem('user',JSON.stringify(res.data.list))
          this.$store.commit('getUser',res.data.list)
          this.$router.push('/home/index')
        })
      }
    }
  }
</script>

<style scoped>

</style>
