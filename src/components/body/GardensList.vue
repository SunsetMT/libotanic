<template>
  <div>
    <GardenItem v-for="garden in GARDENS" :key="garden.id" v-bind:garden="garden"/>
  </div>
</template>

<script>
import GardenItem from "@/components/body/GardenItem";
import {mapGetters} from 'vuex'

export default {
  name: "GardensList",
  components: {
    GardenItem
  },

  computed: {
    ...mapGetters(['GARDENS'])
  }
}
</script>

<style scoped>

</style>