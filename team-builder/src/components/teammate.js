import React, { useState } from 'react'

const TeammateCard = (props) => {
    const { name, age, id, birthday, address, job } = props;

    return(
        <div className='teammate-card'>
            <img src='../img/unknown_photo.jpg' alt='team member' />  
            <div className='details'>
                <h1>Name: {name}</h1>
                <h3>age: {age}</h3>
                <h3>ID: {id}</h3>
                <h3>Date of Birth: {birthday}</h3>
                <h3>Address: {address}</h3>
                <h3>Occupation: {job}</h3>
            </div>
        </div>
    )
}

export default TeammateCard;