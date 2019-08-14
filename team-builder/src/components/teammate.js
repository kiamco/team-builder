import React from 'react'

const TeammateCard = (props) => {
    return(
        <div className='teammate-card'>
            <img src='#' alt='team member' />  
            <div className='details'>
                <h1>Name</h1>
                <h3>age</h3>
                <h3>ID</h3>
                <h3>Date of Birth</h3>
                <h3>Address</h3>
                <h3>Occupation</h3>
            </div>
        </div>
    )
}

export default TeammateCard;