<template>
  <div class="body-wrapper">
    <transition name="appearence">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CommonBody",
}
</script>

<style lang="sass">

@media screen and (max-width: 375px)
  .body-wrapper
    min-height: 749px
    width: 375px
    position: absolute
    top: 85px
    background-color: #F6EEDD
    border-top-right-radius: 50px
    border-top-left-radius: 50px

@media screen and (min-width: 376px)
  .body-wrapper
    min-height: 749px
    width: 98vw
    position: absolute
    top: 85px
    background-color: #F6EEDD
    border-top-right-radius: 50px
    border-top-left-radius: 50px


.appearence-enter-active
  transition: all 1s linear

.appearence-enter, .appearence-leave-to

  opacity: 0


</style>