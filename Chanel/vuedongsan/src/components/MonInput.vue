<template>
  <input v-bind:value="value" v-on:input="updateInput">
</template>

<script>
export default {
  props: ['value'],
  methods: {
    updateInput: function(event) {
      this.$emit('inputMon', event.target.value);
    }
  }
}
</script>
