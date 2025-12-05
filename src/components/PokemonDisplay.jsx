import { useState, useEffect } from "react";

function transformPokemon(pokemonData) {
  return {
    name: pokemonData.name,
    height: pokemonData.height,
    weight: pokemonData.weight,
    imgUrl: pokemonData.sprites.front_default,
  };
}

function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function translateHeight(height) {
    return height / 10
}

export default function PokemonDisplay() {
  //Variable
  const [pokemon, setPokemon] = useState(null);

  //Initial Fetch
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((response) => response.json())
      .then(transformPokemon)
      .then((pokemon) => setPokemon(pokemon));
  }, []);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Name: {capitalizeString(pokemon.name)}</p>
      <p>Weight: {pokemon.weight} lbs.</p>
      <p>Height: {translateHeight(pokemon.height)} Meters</p>
      {pokemon.imgUrl && <img src={pokemon.imgUrl} alt={pokemon.name} />}
    </div>
  );
}
