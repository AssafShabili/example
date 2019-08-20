import React from 'react';


const WheaterReport = ({city_name,country,description,temp}) => {
    return (
        <div>
            <h3>{city_name}</h3>
            <h5>{country}</h5>
            <p>{description}</p>
            <h2>{temp}</h2>
        </div>
    );
};

export default WheaterReport;



