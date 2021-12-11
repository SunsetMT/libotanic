<template>
  <div class="plant-page-wrapper">
    <div class="plant-page-header">
      <div class="plant-page-header-rus-name">
        {{ PLANTS.find(p => p.id === Number($route.params.id)).rus_name }}
      </div>
      <div class="plant-page-header-lat-name">
        {{ PLANTS.find(p => p.id === Number($route.params.id)).lat_name }}
      </div>
    </div>

    <div class="plant-page-body">
      <img :src="PLANTS.find(p => p.id === Number($route.params.id)).pict" alt="" class="plant-page-plant-pic">
    </div>

    <div class="plant-description">
      <div class="plant-description-header">
        Историческая справка
      </div>
      <div class="plant-description-text">
        {{ PLANTS.find(p => p.id === Number($route.params.id)).descr }}
      </div>
    </div>


    <div class="plant-classification">
      <div class="plant-classification-header">
        Место в классификации
      </div>
      <div class="plant-classification-text">
        <div class="plant-classification-el">
          {{ PLANTS.find(p => p.id === Number($route.params.id)).otdel }} |
          {{ PLANTS.find(p => p.id === Number($route.params.id)).divisio }}
        </div>
        <div class="plant-classification-el">
          {{ PLANTS.find(p => p.id === Number($route.params.id)).class }} |
          {{ PLANTS.find(p => p.id === Number($route.params.id)).classis }}
        </div>
        <div class="plant-classification-el">
          {{ PLANTS.find(p => p.id === Number($route.params.id)).otrad }} |
          {{ PLANTS.find(p => p.id === Number($route.params.id)).ordo }}
        </div>
        <div class="plant-classification-el">
          {{ PLANTS.find(p => p.id === Number($route.params.id)).semeistvo }} |
          {{ PLANTS.find(p => p.id === Number($route.params.id)).familia }}
        </div>
      </div>
    </div>


    <ToMenuButton/>

    <div class="plant-page-end-block"></div>

    <CommonFooter/>
  </div>
</template>

<script>
import CommonFooter from "@/components/footer/CommonFooter";
import ToMenuButton from "@/components/body/ToMenuButton";
import {mapGetters} from 'vuex'

export default {
  name: "PlantPage",
  components: {
    CommonFooter,
    ToMenuButton
  },
  props: {
    plant_data: {
      type: Object,
      default: () => {
      }
    }
  },
  computed: {
    ...mapGetters([
      'PLANTS'
    ])
  }
}
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap')

.plant-page-wrapper
  margin-top: 75px


.plant-page-plant-pic
  width: 250px
  height: 305px
  margin: 12px 0 0 0

.plant-page-header-rus-name
  font-size: 32px
  font-family: Raleway, serif

.plant-page-header-lat-name
  font-size: 24px
  color: rgba(130, 130, 130, 1)
  font-family: Raleway, serif

.plant-description
  margin: 10px auto 0 auto
  width: 325px
  background-color: #EADFC9
  border-radius: 10px
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))

  .plant-description-header
    font-family: Raleway, serif
    font-weight: 600
    font-size: 22px

  .plant-description-text
    font-family: Raleway, serif
    font-weight: 500
    font-size: 20px
    text-align: left


.plant-classification
  margin: 20px auto 0 auto
  width: 325px
  background-color: #EADFC9
  border-radius: 10px
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))

  .plant-classification-header
    font-family: Raleway, serif
    font-weight: 600
    font-size: 22px

  .plant-classification-text
    .plant-classification-el
      font-family: Raleway, serif
      font-weight: 500
      font-size: 20px

.plant-page-end-block
  height: 200px

</style>