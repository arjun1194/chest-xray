<template>
<q-page>
<slot-form :buttons="buttons">
  <div slot="title">Login</div>
  <div slot="error">{{error}}</div>
  <div slot="fields">
    <div>
      <div>Email Address</div>
      <q-input class="justify-end" dense placeholder="example@gmail.com"
               v-model="email"/>

      <div class="">Password</div>
      <q-input class="justify center" dense placeholder="Enter your password"
               v-model="password"/>
    </div>
  </div>
  <div slot="buttons">
    <q-btn push color="black" label="Login" class="q-ma-sm" @click="login"/>
    <q-btn push  label="Signup" class="q-ma-sm" to="/signup"/>
  </div>

</slot-form>
</q-page>

</template>

<script>
    import SlotForm from "../../components/SlotForm";
    export default {
        name: "Login",
      components: {SlotForm},
      data(){
          return{
            email:'',
            password:'',
            error:'',
            buttons:[
              {
                label:'login',
                class:'q-ma-sm',
                color:'primary',
                to:'/home'
              },
              {
                label:'sign up',
                class:'text-black q-ma-sm',
                color:'white',
                to:'/signup'
              }
            ]
          }
      },
      methods:{
          login(){
            const vm = this;
            this.$axios
              .post('https://citymorgue.herokuapp.com/users/login',{email:vm.email,password:vm.password})
              .then((res)=>{localStorage.setItem('token',res.data.token);vm.$router.push('/home')})
              .catch(err=>{vm.error = err.response.data.err.message})

          }
      }
    }
</script>

<style scoped>

</style>
