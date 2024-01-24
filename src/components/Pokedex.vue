<template>
  <div>
    <label for="pokemonCount">Nombre de Pokemons à afficher : </label>
    <input type="number" v-model="pokemonCount" id="pokemonCount" @input="fetchPokemons" />
    <br>
    <select name="generation" id="generation" v-model="selectedGeneration" @change="fetchPokemonsGeneration">
      <option value="1">Generation 1</option>
      <option value="2">Generation 2</option>
      <option value="3">Generation 3</option>
      <option value="4">Generation 4</option>
      <option value="5">Generation 5</option>
      <option value="6">Generation 6</option>
      <option value="7">Generation 7</option>
      <option value="8">Generation 8</option>
    </select>
    <ListeTypesPokemon ref="listeTypesPokemon" :pokemons="pokemons" />
    <a v-for="pokemon in pokemons" :key="pokemon.name" :href="`/pokemon/${pokemon.id}`">
      <Pokemon :pokemon="pokemon" />
    </a>
  </div>
</template>

<script>
import axios from 'axios';
import Pokemon from './Pokemon.vue';
import ListeTypesPokemon from './ListeTypesPokemon.vue';

export default {
  components: {
    Pokemon,
    ListeTypesPokemon,
  },
  data() {
    return {
      pokemons: [],
      pokemonCount: 20,
      typeCount: {},
      selectedGeneration: '1', 
    };
  },
  methods: {
    fetchPokemons() {
      if (this.pokemonCount < 0) {
        this.pokemonCount = 0;
        return;
      }
      if (!this.pokemonCount) {
        this.pokemonCount = 0;
        return;
      }

      axios.get(`https://pokebuildapi.fr/api/v1/pokemon/limit/${this.pokemonCount}`)
        .then(response => {
          this.pokemons = response.data;
          this.typeCount = this.$refs.listeTypesPokemon.type();
        })
        .catch(error => {
          console.error('Error fetching Pokémon:', error);
        });
    },

    fetchPokemonsGeneration() {
      axios.get(`https://pokebuildapi.fr/api/v1/pokemon/generation/${this.selectedGeneration}`)
        .then(response => {
          this.pokemons = response.data;
          this.typeCount = this.$refs.listeTypesPokemon.type();
        })
        .catch(error => {
          console.error(`Error fetching Generation ${this.selectedGeneration} Pokémon:`, error);
        });
    },
  },

  mounted() {
    this.fetchPokemons();
  },
};
</script>


<style scoped>
a {
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 100%;
}

select {
  height: 50px;
  width: 200px;
  margin: 10px;
  font-size: 20px;
  border-radius: 25px;
}

</style>