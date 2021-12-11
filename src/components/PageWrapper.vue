<template>
  <div class="page-wrapper">
    <CommonHeader/>
    <CommonBody/>
  </div>
</template>

<script>
import CommonHeader from "@/components/header/CommonHeader";
import CommonBody from "@/components/body/CommonBody";
//import CommonFooter from "@/components/footer/CommonFooter";

export default {
  name: "PageWrapper",
  components: {
    CommonHeader,
    CommonBody,
    //CommonFooter
  }
}
</script>

<style lang="sass">

@media screen and (max-width: 375px)
  .page-wrapper
    width: 375px
    height: 823px
    margin: auto


@media screen and (min-width: 376px)
  .page-wrapper
    height: 823px
    width: 98vw
    margin: auto

</style>