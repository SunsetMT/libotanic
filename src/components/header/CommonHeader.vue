<template>
  <div class="header-wrapper">
    <a href="#/" class="header-title">BiblioGarden</a>
  </div>
</template>

<script>

export default {
name: "CommonHeader"
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap')



.header-wrapper
  height: 124px
  min-width: 375px
  background: linear-gradient(to top, #9AD282, #1FAD08)
  display: flex
  justify-content: center
  align-items: center

  .header-title
    margin-bottom: 45px
    text-decoration: none
    font-family: Raleway,serif
    font-weight: 600
    font-size: 36px
    padding-top: 15px
    color: #ffffff




</style>