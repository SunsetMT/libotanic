<template>
  <div class="plant-page-wrapper" v-cloak>
    <div class="plant-page-header">
      <div class="plant-page-header-rus-name">
        {{ PLANTS.find(p => p.id === Number($route.params.id)).rus_name }}
      </div>
      <div class="plant-page-header-lat-name">
        {{ PLANTS.find(p => p.id === Number($route.params.id)).lat_name }}
      </div>
    </div>

    <div class="plant-page-body">
      <img :src="PLANTS.find(p => p.id === Number($route.params.id)).pict" alt="" class="plant-page-plant-pic" v-cloak>
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


    <div class="plant-extra-photos">
      <div class="plant-extra-photos-text">Фотографии деталей</div>
      <img :src="PLANTS.find(p => p.id === Number($route.params.id)).pict1" alt="" class="plant-page-plant-extra-pic1" v-cloak>
      <img :src="PLANTS.find(p => p.id === Number($route.params.id)).pict2" alt="" class="plant-page-plant-extra-pic2" v-cloak>
    </div>



    <ToMenuButton/>

    <div class="plant-page-end-block"></div>

  </div>
</template>

<script>
import ToMenuButton from "@/components/body/ToMenuButton";
import {mapGetters} from 'vuex'

export default {
  name: "PlantPage",
  components: {
    ToMenuButton
  },
  data: function () {
    return {
      imageData: '',
      pending: true,
    }
  },
  props: {
    plant_data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters([
          'PLANTS'
        ]),
  },

  created() {

  },

  mounted() {
    setTimeout(() => {
      this.pending = false
    }, 1000)
  }


}
</script>

<style lang="sass">



@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap')


[v-cloak]
  display: none


.plant-page-wrapper
  .loading
    width: 250px
    height: 305px


.plant-page-plant-pic
  width: 250px
  height: 305px
  margin: 12px auto 0 auto

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

.plant-extra-photos
  width: 325px
  height: 570px
  font-family: Raleway, serif
  font-size: 22px
  font-weight: 600
  background-color: #EADFC9
  border-radius: 10px
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))
  margin: 20px auto 20px auto

  .plant-extra-photos-text
    padding: 15px

  .plant-page-plant-extra-pic1
    border-radius: 10px
    width: 300px
    height: 231px
    margin: 0 auto 26px auto

  .plant-page-plant-extra-pic2
    width: 300px
    height: 231px
    border-radius: 10px
    margin: 0 auto 0 auto


.plant-page-end-block
  height: 200px

</style>
