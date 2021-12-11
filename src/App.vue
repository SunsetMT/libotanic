<template>
  <div id="app">
    <PageWrapper/>
  </div>
</template>

<script>
import PageWrapper from "@/components/PageWrapper";
export default {
  name: 'App',
  components: {
    PageWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
