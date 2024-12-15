<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AccordionItem",
  props: {
    id: String,
    databstarget: String,
    otazka: String,
    odpoved: String
  }
})
</script>

<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style="background-color: #5B7065; color: #c9d1c8;" type="button" data-bs-toggle="collapse" :data-bs-target="databstarget" aria-expanded="false" :aria-controls="id">
        {{otazka}}
      </button>
    </h2>
    <div :id="id" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style="background-color: #304040; color: #c9d1c8;">{{odpoved}}</div>
    </div>
  </div>
</template>

<style scoped>

</style>