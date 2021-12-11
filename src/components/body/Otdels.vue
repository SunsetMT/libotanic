<template>
  <div class="otdels-wrapper">

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

    <CommonFooter/>
  </div>
</template>

<script>
import OtdelItem from "@/components/body/OtdelItem";
import CommonFooter from "@/components/footer/CommonFooter";
import {mapGetters} from 'vuex'

export default {
  name: "Otdels",
  components: {
    OtdelItem,
    CommonFooter
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


.otdels-wrapper
  margin-top: 17px


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
    font-family: Raleway, serif
    font-size: 24px
    font-weight: 600

  .otdels-header-arrow
    width: 23px
    height: 22px
    background-image: url("../../assets/jpg/title-arrow.svg")

  .search-link
    margin-left: 70px
    margin-right: 31px
    width: 23px
    height: 23px
    background-image: url("../../assets/jpg/search-icon.svg")


</style>