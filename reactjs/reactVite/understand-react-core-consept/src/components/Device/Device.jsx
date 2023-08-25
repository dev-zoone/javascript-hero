import React from 'react';

const Device = (props) => {
    return (
        <div>
            <h1>My Device Name : {props.name}</h1>
            <p>price : {props.price}</p>
        </div>
    );
};

export default Device;