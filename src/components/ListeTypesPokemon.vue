<template>
  <div class="list-types">
    <h3>Liste des types de Pokémons</h3>
    <table>
      <tbody>
        <tr>
          <td v-for="(count, type) in type()" :key="type">
            <img :src="getTypeImageUrl(type)" alt="Type Image" class="type-image" style="filter: invert(0);">
            <p> {{ count }} </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["pokemons"],
  data() {
    return {
      typesCount: {},
    };
  },
  methods: {
    type() {
      const countMap = {};

      this.pokemons.forEach((pokemon) => {
        if (pokemon.apiTypes.length > 0) {
          const firstType = pokemon.apiTypes[0].name;

          if (!countMap[firstType]) {
            countMap[firstType] = 1;
          } else {
            countMap[firstType] += 1;
          }
        }
      });

      return countMap;
    },
    getTypeImageUrl(type) {
      const baseUrl = "https://static.wikia.nocookie.net/pokemongo/images/";
      const typeImages = {
        Poison: "0/05/Poison.png",
        Plante: "5/c5/Grass.png",
        Feu: "3/30/Fire.png",
        Vol: "7/7f/Flying.png",
        Eau: "9/9d/Water.png",
        Insecte: "7/7d/Bug.png",
        Normal: "f/fb/Normal.png",
        Électrik: "2/2f/Electric.png",
        Sol: "8/8f/Ground.png",
        Glace: "7/77/Ice.png",
        Fée: "4/43/Fairy.png",
        Combat: "3/30/Fighting.png",
        Psy: "2/21/Psychic.png",
        Acier: "9/c9/Steel.png",
        Spectre: "a/ab/Ghost.png",
        Roche: "0/0b/Rock.png",
        Dragon: "c/c7/Dragon.png",
        Ténèbres: "0/0e/Dark.png",
      };

      return baseUrl + typeImages[type];
    },
  },
};
</script>

<style scoped>
.list-types {
  margin-top: 5%;
  border: 2px solid white;
  margin-bottom: 20px;
}

.list-types table {
  margin: 0 auto;
}

.list-types img {
  width: 50px;
}

.list-types h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.list-types ul {
  list-style: none;
  padding: 0;
}

.type-image {
  width: 100%;
  margin-right: 5px;;
}

.list-types p {
  display: inline-block;
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
  
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
