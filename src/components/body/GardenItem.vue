<template>
  <div class="garden-item-wrapper-box" v-cloak>
    <a :href="`#/otdels/` + garden.id" class="garden-item-wrapper" :style="styleObject">
      <span class="garden-title">
        {{ garden.name }}
      </span>
    </a>

  </div>
</template>

<script>
export default {
  name: "GardenItem",
  components: {},
  data: function () {
    return {
      weather: null,
      options: {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: 'Saint-Peterburg'},
        headers: {
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
          'x-rapidapi-key': '28378676e0mshb011eb4a5272f7ep1f8eddjsnc6cc2ac86ca8'
        }
      },
    }
  },

  props: {
    garden: {name: String, id: Number, jpg: String}
  },
  computed: {
    styleObject: function () {
      return {
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto 0 auto',
        width: '309px',
        height: '257px',
        // eslint-disable-next-line no-undef
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), ' + 'url(' + require(`../../assets/jpg/${this.garden.jpg}`) + ')',
        backgroundSize: '309px 257px',
        backgroundRepeat: 'no-repeat',
        borderRadius: '10px',
        filter: 'drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))',
        textDecoration: 'none'
      }
    }
  },

  mounted() {
    // eslint-disable-next-line
    require("axios").default.request(this.options)
        .then(response => (this.weather = response.data))
        .catch(function (error) {
          console.error(error);
        })
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap')


[v-cloak]
  display: none


.garden-item-wrapper-box
  padding: 40px 0

  .garden-item-wrapper

    .garden-title
      align-self: center
      width: 276px
      padding-top: 181px
      font-family: Raleway, serif
      font-size: 24px
      line-height: 28px
      text-align: center
      color: #ffffff


</style>
