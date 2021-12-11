<template>
  <div class="page-wrapper">
    <CommonHeader/>
  </div>
</template>

<script>
import CommonHeader from "@/components/header/CommonHeader";
//import CommonBody from "@/components/body/CommonBody";

export default {
  name: "PageCatalog",
  components: {
    CommonHeader,
    //CommonBody
  }
}

</script>

<style lang="sass">
.page-wrapper
  width: 375px
  height: 823px
  margin: auto


</style>