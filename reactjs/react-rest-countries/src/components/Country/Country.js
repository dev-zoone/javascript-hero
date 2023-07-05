import React from 'react';
import './Country.css'

const Country = (props) => {
    const {flags, name, population, area} = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Country Name : {name.common}</h2>
            <p>Population : {population}</p>
            <h3>Area : {area}</h3>
        </div>
    );
};

export default Country;