import React, { useState } from 'react'

const TeammateCard = (props) => {
    const { name, age, id, birthday, address, job } = props;

    return(
        <div className='teammate-card'>
            <div className='details'>
                <h4>Name: {name}</h4>
                <h4>age: {age}</h4>
                <h4>ID: {id}</h4>
                <h4>Date of Birth: {birthday}</h4>
                <h4>Address: {address}</h4>
                <h4>Occupation: {job}</h4>
            </div>
        </div>
    )
}

export default TeammateCard;