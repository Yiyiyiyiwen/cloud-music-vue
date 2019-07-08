<!--  -->
<template>
  <div>
    <test v-for="number in mynumber" :key="number.id" :number="number"></test>

    <template id="testtemp">
      <div>{{number}}</div>
    </template>
  </div>
</template>


<script>
import Vue from "vue";
Vue.component("test", {
  props: ["number"],
  data: function() {
    return {
    };
  },
  template: " <div>{{number}}</div>"
});
export default {
  name: "mymusic",
  data() {
    return {
      mynumber: [1, 2, 3]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
};
</script>
<style scoped>
</style>