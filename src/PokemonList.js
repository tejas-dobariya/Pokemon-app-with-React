import React from 'react'

export default function PokemonList({pokemon}) {
    return (
        <div>
            {pokemon.map(p=>(
                <dir key={p}>{p}</dir>
            ))}
        </div>
    )
}
