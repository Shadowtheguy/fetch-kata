import { useState, useEffect } from "react";

function transformData(pokemonData) {

}

export default function PokemonDisplay() {
    //Variable
    const [pokemon, setPokemon] = useState(null)

    //Initial Fetch
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then((response) => response.json)
        .then(transformData);
    }, [])

    if (!pokemon) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {}
        </div>
    )

}