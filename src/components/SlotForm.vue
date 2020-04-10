<template>
  <div class="">
    <div class="row justify-center text-center">
      <div class="col-lg-4 col-sm-12 col-xs-12 absolute-center ">
        <div class="q-pa-md ">
          <q-card class="my-card">


            <q-card-section class="bg-primary row justify-center" style="height: 50px">
                <div class="text-h5 text-white col-10 self-center q-gutter-sm ">
                  <slot name="title"></slot>
                </div>
              </q-card-section>
            <q-card-section>
              <div class="text-red"><slot name="error"></slot></div>
            </q-card-section>


            <q-card-section>
              <slot name="fields"></slot>
            </q-card-section>


            <div class="row justify-center">
              <div class="col-12" v-for="item in buttons" :key="item.id">
                <q-btn push :color="item.color" :label="item.label" :class="item.class" :to="item.to"/>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SlotForm",
        props:{
          fields:[],
          buttons:[],
        }
    }
</script>

<style scoped>

</style>
