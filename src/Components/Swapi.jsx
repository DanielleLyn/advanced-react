import React from 'react';
import PropTypes from 'prop-types';

//functional component that returns JSX 'Swapi component'


const Swapi = ({data}) =>{
   const PEOPLE = data.map(person => (
       <h2 key={person.name}> Name: {person.name}</h2>
   ))
    return <div> {PEOPLE} </div>;
}
 
Swapi.propTypes = {
    data: PropTypes.array.isRequired,
    name: PropTypes.string //not required
}

export default Swapi;