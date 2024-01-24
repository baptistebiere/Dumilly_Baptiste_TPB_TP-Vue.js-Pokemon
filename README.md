Dumilly Baptiste TPB


TP Vue JS - POKEMON

Les questions auquel j'ai répondu :

  TP2:
  
    1. Installation
        Créer votre projet Vue en utilisant Vite, nous l’appellerons “tp2-pokemon-vuejs”, profitez-en
        également pour installer la librairie Axios, nous nous en servirons plus tard.
        
    2. Création de notre composant pokemon.
        - Ce composant sera affiché sous forme de card.
        - Le format des données doit respecter cette structure et toutes les informations devront être
        présentes :
        {
        "name": "Bulbizarre",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        "apiTypes": [
        {
        "name": "Plante",
        "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
        }
        ],
        "apiGeneration": 1
        }
        - La couleur d’arrière-plan de la card devra être affichée en fonction du premier type du
        pokémon affiché dans le tableau.
        - La totalité des types du pokémon contenus dans le tableau devra être affiché.
        
    3. Création de notre composant pokedex :
        Notre pokedex ne sera ni plus ni moins que notre liste de cards pokemon, pour l’instant dupliquez
        votre composant créé auparavant dans ce composant et vérifiez que vos deux cards s’affichent
        correctement. Pour l’instant tout n’est que statique.
        
    4. Lister les pokémons de manière dynamique avec les props
        Dans le composant pokedex, créez dans vos data un tableau de pokemons, ce tableau
        reprendra la structure que vous avez implémenté au-dessus. Faites ensuite une boucle v-for sur ce
        tableau pour afficher vos composants pokemon. N’oubliez pas de passer votre pokemon courant en
        props et d’afficher les informations de celui-ci via le composant pokemon.
        
    5. Utilisation de l’API Pokebuild.
        Pour afficher les informations de nos pokemons sans avoir à en écrire manuellement 500, nous
        allons utiliser une API permettant de nous retourner les informations au format JSON de nos
        différents pokémons. Si vous avez bien respecté la structure mise en place précédemment,
        l’intégration se fera sans aucun souci. N’oubliez pas que vous pouvez utiliser axios.
        Voici l’api à utiliser :
        https://pokebuildapi.fr/api/v1/pokemon/limit/20
        Note : nous avons volontairement limité à 20 le nombre de retour pour ne pas avoir un temps de
        chargement trop conséquent.
        
  TP 3:

      Question 1 :
        Créer un composant « Footer » situé en bas de l’ensemble de vos pages. Ce footer devra comporter
        votre nom, prénom et votre numéro de TP. (1 point)
        
      Question 2 :
        Faites en sorte désormais de retourner de manière dynamique le nombre de pokémons voulus et non
        20 comme fait dans le TP précédent. Pour cela vous pouvez utiliser un champ de type input pour
        pouvoir entrer la valeur de votre choix. (1 point)
        
      Question 3 :
        Créer un composant « ListeTypesPokemon », ce composant devra lister les différents types des
        pokémons présentsretournés ainsi que leur nombre d’occurrences. Ce composant devra être présent
        au-dessus de votre liste de cards pokemon. Vous pouvez ne prendre que le type principal du
        pokémon dans vos compteurs. Ex : (Feuille : 3, Eau : 2, Feu: 3...) (3 points)
        
      Question 4 :
        Créer un nouveau composant « DetailsPokemon », ce composant devra détailler les informations d’un
        pokémon sélectionné sur une nouvelle page (route) quand vous cliquez sur sa card. Vous devrez
        utiliser le router de Vue pour y parvenir et passer l’identifiant du pokémon pour pouvoir appeler l’API
        de détail d’un pokémon depuis ce nouveau composant. N’hésitez pas à alimenter votre IHM avec le
        plus d’informations possible provenant de l’API. (4points).
        
      Question 5 :
        Faites en sorte de pouvoir récupérer une liste de pokémons provenant d’une génération en
        particulier dans votre pokédex. Vous êtes libre sur la manière de faire mais cela doit se faire de
        manière dynamique dans l’IHM. (2 points)


      
