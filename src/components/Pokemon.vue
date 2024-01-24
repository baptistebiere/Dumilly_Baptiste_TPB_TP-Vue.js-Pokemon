<template>
  <div :class="['pokemon-card', getTypeClass()]">
    <img :src="pokemon.image" alt="Pokemon Image" class="pokemon-image" />
    <div class="pokemon-details">
      <h6>Génération {{ pokemon.apiGeneration }}</h6>
      <h3>{{ pokemon.name }}</h3>
      <div v-for="type in pokemon.apiTypes" :key="type.name" class="type-info">
        <img :src="type.image" alt="Type Image" class="type-image" />
        <span>{{ type.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: Object,
  },
  methods: {
    getTypeClass() {
      return this.pokemon.apiTypes.length > 0 ? this.pokemon.apiTypes[0].name.toLowerCase() : '';
    },
  },
};
</script>

<style scoped>
.pokemon-card {
  display: flex;
  width: 30%;
  margin: 10px;
  border: 1px black solid;
  border-radius: 50px;
}

.pokemon-image {
  width: 100%;
}

.pokemon-details {
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.type-info {
  display: flex;
  align-items: center;
}

.type-image {
  width: 20px;
  margin-right: 5px;
}

.insecte {
  background-color: #a8b820;
}

.feu {
  background-color: #f08030;
}

.eau {
  background-color: #6890f0;
}

.poison {
  background-color: #a040a0;
}

.vol {
  background-color: #8572be;
}

.normal {
  background-color: #707070;
}

.électrik {
  background-color: #f8d030;
}

.sol {
  background-color: #e0c068;
}

.glace {
  background-color: #98d8d8;
}

.fée {
  background-color: #ee99ac;
}

.combat {
  background-color: #c03028;
}

.psy {
  background-color: #f85888;
}

.acier {
  background-color: #b8b8d0;
}

.spectre {
  background-color: #705898;
}

.roche {
  background-color: #b8a038;
}

.dragon {
  background-color: #7038f8;
}

.ténèbres {
  background-color: #313131;
}

.plante {
  background-color: #78c850;
}

</style>
