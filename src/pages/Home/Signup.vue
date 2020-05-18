<template>
  <q-page>
    <slot-form>
      <div slot="title">Sign up</div>
      <div slot="error">{{checkError}} {{error}}</div>
      <div slot="fields">

        <q-input
          v-model="fullname"
          class="justify center q-mx-lg q-mb-lg"
          dense placeholder="Enter Full Name "/>

        <q-input
            v-model="email"
            class="justify-end q-ma-lg"
            dense placeholder="Enter Email Address"/>

        <q-input
            v-model="password"
            class="justify center q-ma-lg"
            dense placeholder="Enter your password"/>

        <q-input
          v-model="confirmPassword"
          class="justify center q-ma-lg"
          dense placeholder="Confirm Password"/>
      </div>
      <div slot="buttons">
        <q-btn push color="black" label="create account" class="q-ma-sm" @click="signup"/>

      </div>



    </slot-form>
  </q-page>

</template>

<script>
  import SlotForm from "../../components/SlotForm";
  export default {
    name: "Signup",
    components: {SlotForm},
    data(){
      return{
        fullname:'',
        email:'',
        password:'',
        confirmPassword:'',
        error:'',

      }
    },
    methods: {
      signup() {
        const vm = this;
        this.$axios.post('https://citymorgue.herokuapp.com/users/signup', {
            name: vm.fullname,
            email: vm.email,
            password: vm.password
          }).then((res) => {
            vm.$router.push('/')
            vm.$q.notify({
            message: 'Account Successfully Created,You can login now!',});})
          .catch(err=>err.response.data.err.errors.map(e=>vm.error+=e.message+'\n'))
      }
    },
    computed:{
      checkError(){
        if(!this.fullname)  return 'Please Provide Full Name';
        if(!this.email) return 'Please Provide Email';
        if(!this.password) return 'Please Provide Password';
        if(!this.confirmPassword) return 'Please Confirm Password';
        if(this.password!==this.confirmPassword) return 'Passwords donot match';
        else return '';
      }
    }
  }
</script>

<style scoped>

</style>
