<template>
  <div class="search-page-wrapper">

    <div class="search-page-header">
      Поиск
    </div>
    <input v-model="search" type="text" class="form-control"
           placeholder="Поиск">

    <div class="all-plants" v-for="plant in PLANTS"
         :key="plant.id">
      <a :href="'#/plant/' + plant.id" class="plant-rus-name"
         v-if="plant.lat_name.toLowerCase().includes(search.toLowerCase()) || plant.rus_name.toLowerCase().includes(search.toLowerCase())">
        {{ plant.rus_name }}
      </a>
      <a :href="'#/plant/' + plant.id" class="plant-lat-name"
         v-if="plant.lat_name.toLowerCase().includes(search.toLowerCase()) || plant.rus_name.toLowerCase().includes(search.toLowerCase())">
        {{ plant.lat_name }}
      </a>
    </div>
    <ToMenuButton/>
  </div>
</template>

<script>
import ToMenuButton from "@/components/body/ToMenuButton";
import {mapGetters} from 'vuex'

export default {
  name: "SearchPage",
  data: function () {
    return {
      search: ''
    }
  },
  components: {
    ToMenuButton
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

.search-page-wrapper
  .search-page-header
    padding-top: 20px
    margin: 0 auto 20px auto
    font-family: Raleway, serif
    font-size: 28px
    font-weight: 600


  .form-control
    margin-bottom: 20px

  .all-plants
    margin: 10px auto 0 auto


.plant-rus-name
  display: block
  color: black
  text-decoration: none
  font-size: 32px
  font-family: Raleway, serif

.plant-lat-name
  display: block
  text-decoration: none
  font-size: 24px
  color: rgba(130, 130, 130, 1)
  font-family: Raleway, serif


</style>