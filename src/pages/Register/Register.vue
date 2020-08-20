<template>
  <div>
    <input type="text" placeholder="用户名" v-model="nickname">
    <br>
    <input type="text" placeholder="密码" v-model="password">
    <br>
    <input type="text" placeholder="手机" v-model="phone">
    <br>
    <button @click="reg">注册</button>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        phone:"",
        nickname:'',
        password:''
      }
    },
    methods:{
      reg(){
        this.$http.post('/register',{
          phone:this.phone,
          nickname:this.nickname,
          password: this.password
        }).then(res=>{
          console.log(res)
          alert("注册成功")
        })
      }
    },
  }
</script>

<style scoped>

</style>
