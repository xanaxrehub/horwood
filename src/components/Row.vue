<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Row",
  props: {
    left: String,
    right: String
  }
})
</script>

<template>
  <tr>
    <th scope="row">{{ left }}</th>
    <td>{{ right }}</td>
  </tr>
</template>

<style scoped>

</style>