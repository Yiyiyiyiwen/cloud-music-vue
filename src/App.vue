
<!--  -->
<template>
    <div id="app">
    <Guide></Guide>
    <router-view/>
  </div>
</template>

<script>
import Guide from './components/Guide'

export default {
  name: 'App',
  data () {
    return {
    };
  },

  components: {
    Guide
  },

  computed: {},

  mounted: {},

  methods: {}
}

</script>


<style>
body,html{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>