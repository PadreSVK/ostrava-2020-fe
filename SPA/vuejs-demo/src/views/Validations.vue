<template>
  <div>
    <v-text-field-validateable v-model="myText" label="Password" rules="required" type="password" />

    <v-text-field  label="Password" v-model="myText" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      myText: ''
    }
  }
}
</script>

<style>
</style>
