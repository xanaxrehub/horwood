<script lang="ts">
import {defineComponent} from 'vue'
import data from "@/data/data.json"
import Zaujimavost from "@/components/Zaujimavost.vue";
import AccordionItem from "@/components/AccordionItem.vue";

export default defineComponent({
  name: "ZaujimavostiView",
  data() {
    return {
      zaujimavosti: data.zaujimavosti,
      accordion_items: data.accordion_items2,
    }
  },
  components: {Zaujimavost,
  AccordionItem},
})
</script>

<template>
  <div class="container">
    <div class="row text-center" style="padding-top: 50px;">
      <div class="col">
        <h1 style="font-family: 'Montserrat', sans-serif; color: #5B7065;">Mestá Ukrajiny (podľa počtu obyvateľov)</h1>
      </div>
    </div>
    <div class="row" style="padding-top: 20px;">
      <div class="col">
        <ul class="list-group">
          <li class="list-group-item" style="background-color: #5B7065; color:#c9d1c8;">Kyjev</li>
          <li class="list-group-item" style="background-color: #5B7065; color:#c9d1c8;">Charkov</li>
          <li class="list-group-item" style="background-color: #5B7065; color:#c9d1c8;">Odessa</li>
          <li class="list-group-item" style="background-color: #5B7065; color:#c9d1c8;">Dnepropetrovsk</li>
          <li class="list-group-item" style="background-color: #5B7065; color:#c9d1c8;">Ľvov</li>
        </ul>
      </div>
    </div>
  </div>
  <Zaujimavost v-for="(zaujimavost,index) in zaujimavosti" :key="index" :image="zaujimavost.image" :cislo="zaujimavost.cislo" :text="zaujimavost.text"/>
  <div class="container" style="padding-bottom: 50px;">
    <div class="container-text text-center" style="padding-bottom: 50px; padding-top: 50px;">
      <h1 style="color: #5B7065;">Kvíz</h1>
    </div>
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <AccordionItem v-for="(item,index) in accordion_items" :key="index" :id="item.id" :databstarget="item.databstarget" :otazka="item.otazka" :odpoved="item.odpoved" />
    </div>
  </div>
</template>

<style scoped>

</style>