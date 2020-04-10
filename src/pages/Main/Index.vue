<template>
  <q-page class="bg-grey-1">
    <div class="absolute-center">
      <IconText icon="present_to_all" text="Please upload an xray image to see results"/>
    </div>
  </q-page>
</template>

<script>
  import IconText from "../../components/IconText";
  export default {
    name: 'PageIndex',
    components: {IconText}
  }
</script>
