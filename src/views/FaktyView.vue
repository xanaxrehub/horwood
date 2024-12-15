<script lang="ts">
import {defineComponent} from 'vue'
import data from "@/data/data.json"
import Fakt from "@/components/Fakt.vue";
import FaktsText from "@/components/FaktsText.vue";
import Row from "@/components/Row.vue";
import AccordionItem from "@/components/AccordionItem.vue";

export default defineComponent({
  name: "FaktyView",
  components: {
    AccordionItem, Fakt,
  FaktsText,
  Row},
  data() {
    return {
      fakts: data.fakts,
      rows: data.rows,
      accordion_items: data.accordion_items,
    }
  },
})
</script>

<template>
  <div class="container-fluid" style="padding-top: 50px; padding-left: 50px; padding-right: 50px;" >
    <div class="row gx-5 gy-5 text-center">
      <Fakt v-for="(fakt, index) in fakts" :key="index" :image="fakt.image" :maintext="fakt.maintext" :text="fakt.text"/>
    </div>
  </div>

  <div class="container" style="padding-top: 75px; padding-bottom: 50px;">
    <table class="table table-success table-striped-columns text-center">
      <tbody>
      <Row v-for="(row,index) in rows" :key="index" :left="row.left" :right="row.right"/>
      </tbody>
    </table>
  </div>

  <div class="container" style="padding-top: 50px;">
    <FaktsText image="src/assets/images/culture.png" section="Kultúra" text="Často sa hovorí, že Ukrajina sa nachádza medzi východom a západom. Ukrajinská kultúra je skutočne jasnou kombináciou kultúr rôznych národov, ktoré žili a žijú na území Ukrajiny. To je to, čo ho robí tak zaujímavým. Oficiálna stránka Ukraine vám povie o modernom ukrajinskom divadle, architektúre, fotografii, literatúre, hudbe, módnych trendoch v odievaní, vizuálnom umení, kinematografii a grafickom dizajne. Na stránke nájdete informácie o pripravovaných kultúrnych a športových podujatiach, festivaloch, ako aj zoznam múzeí a galérií, ktoré sa oplatí navštíviť. Ukrajina má svetu čo ukázať."/>
  </div>
  <div class="container" style="padding-bottom: 50px;">
    <div class="row gx-5 gy-5 text-center">
      <div class="col fakts1 mx-auto p-4 rounded">
        <p style="padding-top: 10px; color: #c9d1c8; font-family: 'Montserrat', sans-serif;">Jednou z najrozmanitejších a najinovatívnejších oblastí ukrajinskej kultúry je hudobný priemysel. Objavte ukrajinskú hudbu a jej rytmy na medzinárodnom show-festivale Waves Vienna. V roku 2020 sa na festivale predstavilo šesť ukrajinských skupín. Vypočujme si jazz aj na Am I Jazz Festivale afroamerickej a improvizačnej hudby. Tento každoročný festival poukazuje na kontrasty a paralely medzi novou akustickou a elektronickou hudbou.</p>
        <p style="color: #c9d1c8; font-family: 'Montserrat', sans-serif;">Súčasní krymskí a ukrajinskí umelci vystúpili na online koncerte 'Svoi.Korinni' k Medzinárodnému dňu svetového domorodého obyvateľstva. Ak ste fanúšikom vážnej hudby, určite na vás zapôsobí spomienkový koncert venovaný Josephovi Rothovi, slávnemu novinárovi a prozaikovi. Koncert sa konal v jeho rodnom meste Brody (Ľvovská oblasť) a zišlo sa na ňom viac ako 200 umelcov z celého sveta.</p>
      </div>
    </div>
  </div>

  <div class="container" style="padding-bottom: 50px;">
    <div class="row gx-5 gy-5 text-center">
      <div class="col-lg-5 fakts1 mx-auto p-1 rounded">
        <img src="@/assets/images/ukrainenarod1.jpg" width="600px" class="img-fluid rounded" alt="">
      </div>
      <div class="col-lg-5 fakts1 mx-auto p-1 rounded">
        <img src="@/assets/images/Ukraine_narod_2.jpg" width="600px" style="padding-top: 7px; padding-bottom: 7px;" class="img-fluid rounded" alt="">
      </div>
    </div>
  </div>


  <div class="container">
        <FaktsText image="src/assets/images/cousine.png" section="Kuchyňa" text="Ukrajinská kuchyňa so svojimi rozmanitými chuťami a technikami varenia je dôležitou súčasťou kultúrneho dedičstva krajiny. Odráža osobitosti regiónov krajiny a kulinárske dedičstvo rôznych etnických a národnostných spoločenstiev Ukrajiny. Boršč (polievka z červenej repy) je najznámejšie ukrajinské jedlo. Každá ukrajinská rodina má svoj vlastný recept na boršč. Najbežnejší recept zahŕňa kapustu, mrkvu, cibuľu, zemiaky, paradajky a mäso, hoci boršč môže byť aj vegetariánsky. Okrem reštaurácií a kaviarní by ste mali navštíviť miestne trhy s ovocím, zeleninou, bylinkovými čajmi a domácimi syrmi."/>
  </div>


  <div class="container" style="padding-bottom: 50px;">
    <div class="row gx-5 gy-5 text-center">
      <div class="col-lg-6 fakts1 mx-auto p-1 rounded">
        <img src="@/assets/images/borsch.jpg" width="800px" class="img-fluid rounded" alt="">
      </div>
    </div>
  </div>



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