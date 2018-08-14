import React from 'react';
import PropTypes from 'prop-types';

//functional component that returns JSX 'Poke component'


const Poke = ({data}) =>{
  
   const POKEMON = data.map(pokemon => (
       <h2 key={pokemon.name}> Name: {pokemon.name}</h2>
   ))
    return <div> {POKEMON} </div>;
}
 
Poke.propTypes = {
    data: PropTypes.array.isRequired,
    name: PropTypes.string //not required
}

export default Poke;