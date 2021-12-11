<template>
  <div class="otdel-item-main-wrapper">
    <a class="otdel-item-wrapper" :style="this.styleObject" @click="changeStatus">
      <span class="otdel-title">{{ otdel_data.name }}</span>
    </a>


    <transition name="fade">
      <div class="otrads" v-if="isActive">
        <div class="otrad_item" v-for="plant in this.$store.state.plants.filter(p => p.otdel === otdel_data.name)"
             :key="plant.id">
          <a :href="'#/plant/' + plant.id" class="plant-rus-name">
            {{ plant.rus_name }}
          </a>
          <a :href="'#/plant/' + plant.id" class="plant-lat-name">
            {{ plant.lat_name }}
          </a>

        </div>
      </div>
    </transition>


  </div>


</template>

<script>
import {mapGetters} from 'vuex'


export default {
  name: "OtdelItem",
  data: function () {
    return {
      isActive: false,
    }
  },
  props: {
    otdel_data: {
      type: Object,
      default: () => {
      }
    }
  },
  methods: {
    changeStatus: function () {
      this.isActive = !this.isActive
    },

  },
  computed: {
    ...mapGetters([
      'PLANTS'
    ]),
    styleObject: function () {
      return {
        textDecoration: 'none',
        color: 'white',
        fontSize: '32px',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        margin: '12px auto 12px auto',
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), ' + 'url(' + require(`../../assets/jpg/${this.otdel_data.pic}`) + ')',
        backgroundRepeat: 'no-repeat',
        width: '375px',
        height: '72px',
      }
    },
  },
}
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap')



.otdel-title
  align-self: center
  font-family: Raleway, serif
  font-weight: 400

.otrad_item
  margin: 12px auto 12px auto
  width: 375px

.plant-description-text
  padding: 5px


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

.fade-enter-active, .fade-leave-active
  transition: all 0.5s linear

.fade-enter
  transform: translateX(15px)
  opacity: 0

.fade-leave-to
  transform: translateX(-15px)
  opacity: 0

</style>