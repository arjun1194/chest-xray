<template>
  <div class="row text-center">
    <div class="col-12">
      <q-icon name="present_to_all" class="text-grey" style="font-size: 4rem;" />
    </div>
    <div class="text-h6 col-12">Please upload an xray image to see results</div>
  </div>
</template>

<script>
    export default {
        name: "IconText",
      props:{
          icon:{},
          text:{},
      }
    }
</script>

<style scoped>

</style>
