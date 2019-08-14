import React, { useState } from 'react';

const TeamFrom = (props) =>{

    const [teammateInfo , setTeammateInfo] = useState({
        name:'',
        age:'',
        id:'',
        birthday:'',
        address:'',
        job:''
    })

    const submitTeamData = (event) => {
        event.preventDefault();
    }
    return(
        <div className='team-form'>
        <form onSubmit={submitTeamData}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' placeholder='name'/>
            
            <label htmlFor="age">Age</label>
            <input type="text" name='age' placeholder='age' />
            
            <label htmlFor="id">ID</label>
            <input type="text" name='id' placeholder='id' />
            
            <label htmlFor="birthday">Date of birth</label>
            <input type="date" name='birthday' placeholder='date of birth' />
            
            <label htmlFor="address">Address</label>
            <input type="text" name='address' placeholder='address' />
            
            <label htmlFor="job">Occupation</label>
            <input type="text" name='job' placeholder='occupation' />

            <button type='submit'>Submit</button>
        </form>
        </div >
    )
}

export default TeamFrom;