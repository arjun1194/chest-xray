<template>
    <q-page>
        <div class="absolute-center">
          <div class="text-subtitle1 text-center">If you have any doubt you can contact us by sending us a message</div>
          <div class="q-pa-sm">
            <div>Name</div>
            <q-input outlined v-model="name"  :dense="true"/>
          </div>
          <div class="q-pa-sm">
            <div>Enter Your Query</div>
            <q-input outlined v-model="query"  :dense="true"/>
          </div>
          <div class="row justify-center">
            <div class="col-2">
              <q-btn label="Submit" @click="sendQuery"></q-btn>
            </div>
          </div>

        </div>
    </q-page>
</template>

<script>
    export default {
        name: "Contact",
      data(){
          return {
            name:'',
            query:''
          }
      },
      methods:{
          sendQuery(){
            let that = this;
            if(this.name===""||this.query===""){
              that.$q.dialog({message:'Please enter your name and or Query'});
              return;
            }


            let data = {name:this.name,query:this.query};
              this.$axios.post('https://citymorgue.herokuapp.com/contact/add',data,{headers:{Authorization:localStorage.getItem('token')}}).then(()=>{
                  that.$q.dialog({message:'Your Query has been Submitted, we will contact you shortly via mail'})
              }).catch((err)=>{console.log(err)})
          }
      }
    }
</script>

<style scoped>

</style>
