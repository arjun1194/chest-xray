<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <div class="q-pa-sm">
          <div>Enter Patient Name</div>
          <q-input outlined v-model="patientName" placeholder="e.g. Pawan Kumar" :dense="true"/>
        </div>
        <div class="q-pa-sm">
          <div>Enter Patient Gender</div>
          <q-radio v-model="patientGender" val="true" label="Male" />
          <q-radio v-model="patientGender" val="false" label="Female" />
        </div>
        <div class="q-pa-sm">
          <div>Enter Patient Phone Number</div>
          <q-input outlined v-model="patientNumber" placeholder="+91-99XXXXXXXX" :dense="true"/>
        </div>
        <div class="q-pa-sm">
          <div>Enter Patient City</div>
          <q-input outlined v-model="patientCity" placeholder="e.g. Delhi, Noida , Gurgaon" :dense="true"/>
        </div>
        <div class="q-pa-sm">
          <div>Please Pick an Image</div>
          <q-file outlined dense v-model="file">
            <template v-slot:append>
              <q-icon name="image"/>
            </template>
          </q-file>
        </div>
      </q-card-section>
      <q-card-section>
        <q-btn label="Upload" color="primary" @click="uploadFile"/>
      </q-card-section>


    </q-card>
  </q-dialog>
</template>

<script>
  import image2base64 from 'image-to-base64';
  export default {
    name: 'UploadImageForm',
    props: {},
    data() {
      return {
        patientName: '',
        patientGender: false,
        patientNumber: '',
        patientCity: '',
        file: {},
        dataUrl:null,
        decoded:''
      }
    },

    methods: {
      show() {
        this.$refs.dialog.show()
      },

      hide() {
        this.$refs.dialog.hide()
      },

      onDialogHide() {
        this.$emit('hide')
      },

      uploadFile() {
        const vm = this;
        let dataUrl  = "";
        console.log("File",vm.file);



          const reader = new FileReader();
          reader.onload = function(){
            const output = document.getElementById('output');
          };
         reader.readAsDataURL(vm.file);




        this.$axios
          .post(
            'https://citymorgue.herokuapp.com/results/create',
            {
              name: vm.patientName,
              gender: vm.patientGender,
              phoneNumber: vm.patientNumber,
              city: vm.patientCity,
              image: vm.file.name,
            },
            {headers: {'Authorization': localStorage.getItem('token')}})
          .then(res => {


            this.$emit('ok', {data:res.data,url:reader.result});
            this.$emit('url',);
            this.$emit('hide')
          })
          .catch(err => console.log({err}))

      },

    }
  }
</script>
