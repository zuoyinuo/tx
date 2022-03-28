<template>
  <div class="home">
    <MyTitle></MyTitle>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import MyTitle from "../components/MyTitle.vue";

export default {
  name: "HomeView",
  components: {
    MyTitle,
  },
};
</script>
<style scoped>
.cesi {
  width: 7.5rem;
  height: 7.5rem;
  background: red;
}
</style>
