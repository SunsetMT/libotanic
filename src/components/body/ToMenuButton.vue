<template>
  <transition>
    <button class="to-menu-button" @click="redirect('#/otdels')">
      <img src="../../assets/jpg/back-arrow.svg" alt="" class="back-arrow">
      Вернуться в меню
    </button>
  </transition>
</template>

<script>
export default {
  name: "ToMenuButton",
  methods: {
    redirect(link){
      window.location = link
    }
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap')

.to-menu-button
  position: relative
  top: 50px
  width: 250px
  height: 50px
  font-family: Raleway, serif
  font-size: 20px
  border: inherit
  background-color: #EADFC9
  border-radius: 10px
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25))
  margin: auto
  display: flex
  justify-content: center
  align-items: center

.back-arrow
  width: 16px
  height: 16px
  margin-right: 15px

button
  transition: all 0.35s ease-out
  background: #EADFC9
  color: #000000

button:hover, button:focus
  transition: all 0.35s linear
  color: #ffffff
  background: #1FAD08

</style>