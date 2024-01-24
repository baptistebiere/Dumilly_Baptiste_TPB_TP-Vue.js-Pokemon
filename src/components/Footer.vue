<template>
  <footer class="footer">
    <p>{{ nom }} - TP {{ tp }}</p>
    <p>TP Vus.js - Pokemon</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      nom: "Dumilly Baptiste",
      tp: "B",
    };
  },
};
</script>

<style scoped>  
.footer {
  text-align: center;
  margin-top: 0 auto;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #1b1b1b;
}
</style>
