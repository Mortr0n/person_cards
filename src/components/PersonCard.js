import React, { useState } from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor} = props;

    const [ageUp, setAge] = useState(age);
    
    const handleClick = () => setAge(ageUp + 1);

    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Hair Color : {hairColor}</p>
            <p>Age : {ageUp}</p>
            <button onClick={ handleClick }>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard;