import React, { useState } from 'react';
const TeammateCard = (props) => {
    const { name, age, id, birthday, address, job } = props;

    return(
        <div className='teammate-card'>
            <div className='details'>
                <h4><span>Name</span>: {name}</h4>
                <h4><span>Age</span>: {age}</h4>
                <h4><span>ID</span>: {id}</h4>
                <h4><span>Date of Birth</span>: {birthday}</h4>
                <h4><span>Address</span>: {address}</h4>
                <h4><span>Occupation</span>: {job}</h4>
            </div>
        </div>
    )
}

export default TeammateCard;