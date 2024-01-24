<template>
  <div class="bouton">
    <button @click="navigateToPokemon(parseInt(this.$route.params.id) - 1)">
      Précédent
    </button>

    <button>
      <router-link to="/">Vers le Pokedex</router-link>
    </button>

    <button @click="navigateToPokemon(parseInt(this.$route.params.id) + 1)">
      Suivant
    </button>
  </div>
  <div v-if="!!pokemonDetails">
    <div :class="getTypeClass()">
      <h1>{{ pokemonDetails.name }}</h1>

      <h5>Génération {{ pokemonDetails.apiGeneration }}</h5>
      <img
        :src="pokemonDetails.image"
        alt="Pokemon Image"
        class="pokemon-image"
      />
      <div class="type-info-container">
        <div
          v-for="type in pokemonDetails.apiTypes"
          :key="type.name"
          class="type-info"
        >
          <img :src="type.image" alt="Type Image" class="type-image" />
        </div>
      </div>
    </div>

    <div class="pokemon-details">
      <div class="stat">
        <h2>Statistiques</h2>
        <table class="stat-table">
          <tbody>
            <tr>
              <th>Statistique</th>
              <th>Valeur</th>
            </tr>
            <tr v-for="(value, stat) in pokemonDetails?.stats" :key="stat">
              <td>{{ stat }}</td>
              <td>{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="resistance">
        <h2>Résistances</h2>
        <table class="resistance-table">
          <tbody>
            <tr>
              <th>Type de Résistance</th>
              <th>Relation de Dommage</th>
            </tr>
            <tr
              v-for="resistance in pokemonDetails.apiResistances"
              :key="resistance.name"
            >
              <td>{{ resistance.name }}</td>
              <td>{{ resistance.damage_relation }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="evo">
        <h2>Évolutions</h2>
        <table
          v-if="
            pokemonDetails.apiEvolutions &&
            pokemonDetails.apiEvolutions.length > 0
          "
          class="evo-table"
        >
          <thead>
            <tr>
              <th>Nom</th>
              <th>Pokedex ID</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="evolution in pokemonDetails.apiEvolutions"
              :key="evolution.name"
            >
              <td>{{ evolution.name }}</td>
              <td>{{ evolution.pokedexId }}</td>
              <td>
                <a :href="`/pokemon/${evolution.pokedexId}`">
                  <img
                    :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolution.pokedexId}.png`"
                    alt="Pokemon Image"
                    class="evo-img"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else>Aucune évolution disponible.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemonDetails: {},
    };
  },
  mounted() {
    const pokemonId = this.$route.params.id;
    this.fetchPokemonDetails(pokemonId);
  },
  methods: {
    async fetchPokemonDetails(pokemonId) {
      const response = await fetch(
        `https://pokebuildapi.fr/api/v1/pokemon/${pokemonId}`
      );
      this.pokemonDetails = await response.json();
      console.log(this.pokemonDetails);
    },
    async navigateToPokemon(newPokemonId) {
      if (newPokemonId < 1 || newPokemonId > 898) {
        return;
      }
      await this.$router.push(`/pokemon/${newPokemonId}`);
      this.fetchPokemonDetails(newPokemonId);
    },
    getTypeClass() {
      if (!this.pokemonDetails.apiTypes) {
        return "";
      }
      const firstType = this.pokemonDetails.apiTypes[0]?.name || "default";
      return `${firstType.toLowerCase()}`;
    },
  },
};
</script>


<style scoped>
.pokemon-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

li {
  list-style-type: none;
}

ul {
  padding: 0;
}

h2 {
  font-size: 50px;
}

img {
  width: 50%;
  height: auto;
}

.type-info-container {
  display: flex;
}

.type-image {
  max-width: 50%;
  height: auto;
}

.evo-table {
  width: 100%;
  border-collapse: collapse;
}

.evo-table th,
.evo-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.evo-table th {
  background-color: #000000;
}

.evo-img {
  max-width: 50%;
  height: auto;
}

.evo {
  margin-bottom: 20px;
}

.bouton {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: auto;
  color: #ffffff;
  text-decoration: none;
}

.bouton :hover {
  background-color: #000000;
  color: #ffffff;
}

a {
  text-decoration: none;
  color: #ffffff;
}

.insecte {
  background-color: #a8b820;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feu {
  background-color: #f08030;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.eau {
  background-color: #6890f0;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.poison {
  background-color: #a040a0;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vol {
  background-color: #8572be;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.normal {
  background-color: #707070;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.électrik {
  background-color: #f8d030;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sol {
  background-color: #e0c068;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.glace {
  background-color: #98d8d8;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fée {
  background-color: #ee99ac;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.combat {
  background-color: #c03028;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.psy {
  background-color: #f85888;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.acier {
  background-color: #b8b8d0;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spectre {
  background-color: #705898;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.roche {
  background-color: #b8a038;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dragon {
  background-color: #7038f8;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ténèbres {
  background-color: #313131;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.plante {
  background-color: #78c850;
  border: 1px black solid;
  border-radius: 50px;
  padding: 10px;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat {
  margin-top: 20px;
}

.stat-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.stat-table th,
.stat-table td {
  border: 1px solid #000000;
  padding: 8px;
  text-align: left;
}

.stat-table th {
  background-color: #000000;
}

.stat-table tbody tr:nth-child(even) {
  background-color: #2e2e2e;
}

.resistance {
  margin-top: 20px;
}

.resistance-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.resistance-table th,
.resistance-table td {
  border: 1px solid #000000;
  padding: 8px;
  text-align: left;
}

.resistance-table th {
  background-color: #000000;
}

.resistance-table td:nth-child(odd) {
  background-color: #2e2e2e;
}
</style>
