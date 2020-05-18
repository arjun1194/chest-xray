<template>
  <div class="fixed-center text-center">
    <p>

    </p>
    <p class="text-faded">
      Sorry, nothing here...<strong>(404)</strong>
    </p>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.back()"
      label="Go back"
    />
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
