<template>
  <div class="otdels-wrapper" v-cloak>

    <div class="otdels-header">

    </div>

    <span class="search-link-box">
      <div class="otdels-header-title">
        Список
      </div>
      <span class="otdels-header-arrow"></span>

      <a href="#/search" class="search-link"></a>
    </span>

    <OtdelItem v-for="otdel in OTDELS"
               :key="otdel.name"
               :otdel_data="otdel"/>

  </div>
</template>

<script>
import OtdelItem from "@/components/body/OtdelItem";
import {mapGetters} from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Otdels",
  components: {
    OtdelItem
  },
  computed: {
    ...mapGetters([
      'OTDELS'
    ])
  },

}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap')


[v-cloak]
  display: none


.otdels-wrapper

  .otdels-header
    margin-bottom: 20px
    display: flex
    justify-content: center
    align-items: center

.search-link-box
  height: 25px
  width: 375px
  margin: 0 auto 20px auto
  display: flex
  justify-content: flex-end
  .otdels-header-title
    width: 104px
    display: flex
    align-items: center
    font-family: Raleway, serif
    font-size: 24px
    font-weight: 600

  .otdels-header-arrow
    width: 23px
    height: 22px
    background-image: url("../../assets/jpg/title-arrow.svg")

  .search-link
    margin-left: 70px
    margin-right: 21px
    width: 23px
    height: 23px
    background-image: url("../../assets/jpg/search-icon.svg")


</style>