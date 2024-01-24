<template>
  <div id="app">
    <main class="main">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Pokedex from "./components/Pokedex.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Pokedex,
    Footer,
  },
  data() {
    return {
      pokemons: [],
    };
  },
};
</script>

<style>
body {
  font-family: "Arial", sans-serif;
  align-items: center;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
