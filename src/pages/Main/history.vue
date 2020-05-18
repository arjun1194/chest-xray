<template>
    <q-page>
      <q-list bordered>

        <q-item v-for="result in results" :key="result.id" class="q-my-sm" clickable v-ripple>

          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">{{result.patient.name.charAt(0)}}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ result.patient.name }}</q-item-label>
            <q-item-label caption lines="1">{{ result.patient.city }} {{result.patient.phoneNumber}}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon v-if="result.patient.resulttStatus" name="chat_bubble" color="red" />
            <q-icon v-else name="chat_bubble" color="green" />
          </q-item-section>
        </q-item>


      </q-list>
    </q-page>
</template>

<script>
    export default {
        name: "history",
      data(){
          return{
            results:[
              {
                id:0,
                resultStatus:false,
                resultPerc:89.9999,
                patient:
                  {
                    id:0,
                    name: 'Arjun Bhardwaj',
                    gender: false,
                    phoneNumber: 9910658167,
                    city: 'Noida',
                    image: 'hello_alskdjalskdj'

                  }


              },
              {
                id:0,
                resultStatus:false,
                resultPerc:89.9999,
                patient:
                  {
                    id:0,
                    name: 'Naman Singh',
                    gender: false,
                    phoneNumber: 9910658167,
                    city: 'Noida',
                    image: 'hello_alskdjalskdj'

                  }


              },
              {
                id:0,
                resultStatus:false,
                resultPerc:89.9999,
                patient:
                  {
                    id:0,
                    name: 'Salman Ali Khan',
                    gender: false,
                    phoneNumber: 9910658167,
                    city: 'Noida',
                    image: 'hello_alskdjalskdj'

                  }


              },
              {
                id:0,
                resultStatus:false,
                resultPerc:89.9999,
                patient:
                  {
                    id:0,
                    name: 'Tushar Rexwal',
                    gender: false,
                    phoneNumber: 9910658167,
                    city: 'Noida',
                    image: 'hello_alskdjalskdj'

                  }


              }
            ]
          }
      },
      created() {

      }
    }
</script>

<style scoped>

</style>
