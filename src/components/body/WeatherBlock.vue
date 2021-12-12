<template>
  <div class="weather-wrapper">
    <div class="weather-inf bg-blue-500">Region: {{weather.location.region}}</div>
    <div class="weather-inf">Localtime: {{weather.location.localtime}}</div>
    <div class="weather-inf">Temp_C: {{weather.current.temp_c}}</div>
    <div class="weather-inf">Temp_F: {{weather.current.temp_f}}</div>
    <div class="weather-inf">Temp_C_feels: {{weather.current.feelslike_c}}</div>
    <div class="weather-inf">Temp_F_feels: {{weather.current.feelslike_f}}</div>
    <div class="weather-inf">Humidity: {{weather.current.humidity}}</div>
  </div>
</template>

<script>
export default {
  name: "WeatherBlock",
  data: function () {
    return {
      weather: null,
      options: {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: 'Sochi'},
        headers: {
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
          'x-rapidapi-key': '28378676e0mshb011eb4a5272f7ep1f8eddjsnc6cc2ac86ca8'
        }
      }
    }
  },

  mounted() {
    require("axios").default.request(this.options)
    .then(response => this.weather = response.data)
    .catch(error => console.log(error))
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap')

.weather-wrapper
  margin-top: 20px
  font-family: Raleway, serif
  font-size: 20px

</style>