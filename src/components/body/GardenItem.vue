<template>
  <div class="garden-item-wrapper-box">
    <a href="#/otdels" class="garden-item-wrapper">
      <span class="garden-title">
        Ботанический сад Петра Великого
      </span>
    </a>

  </div>
</template>

<script>
export default {
  name: "GardenItem",
  components: {
  },
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
      }
    }
  },

  mounted() {
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
.garden-item-wrapper

  display: flex
  justify-content: center
  margin: 74px auto 0 auto
  width: 309px
  height: 257px
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("../../assets/jpg/PetrGarden.jpg")
  background-size: 309px 257px
  background-repeat: no-repeat
  border-radius: 10px
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))
  text-decoration: none

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
