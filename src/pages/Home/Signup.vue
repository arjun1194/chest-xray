<template>
  <q-page>
    <slot-form :buttons="buttons">
      <div slot="title">Sign up</div>
      <div slot="error">{{error}}</div>
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
        buttons:[
          {
            label:'Create Account',
            class:'q-ma-sm',
            color:'primary',
            to:'/home'
          },

        ]
      }
    }
  }
</script>

<style scoped>

</style>
