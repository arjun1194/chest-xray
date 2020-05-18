<template>
    <q-page class="bg-grey-1">
      <div class="absolute-center">
        <div class="text-subtitle1  text-center">{{main}}</div>
        <div class="text-subtitle2  text-center">{{madeBy}}</div>
      </div>

    </q-page>
</template>

<script>
    export default {
        name: "Info",
      data(){
          return {
            main:"This is a Medical Diagnosis system which makes use of Content Based Image Retrieval to provide the best possible prediction of the medical diagnosis which is correct with a good percentage of accuracy.The system is used to bring about easier medical diagnosis in rural areas aswell as to fight corona virus.",
            madeBy:"-made by Salman Ali Khan, Raghav Gupta, Tushar rexwal"
          }
      }
    }
</script>

<style scoped>

</style>
