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

    const changeHandler = (event) => {
        setTeammateInfo({ ...teammateInfo, [event.target.name]: event.target.value });
    }

    const submitTeamData = (event) => {
        event.preventDefault();
        const newTeamMember = {...teammateInfo};
        props.addNewTeammate(newTeamMember);
    };    
    return(
        <div className='team-form'>
        <form onSubmit={submitTeamData}>
            <label htmlFor="name">Name</label>
            <input 
                type="text" 
                name='name' 
                placeholder='name'
                onChange={changeHandler}
            />
            
            <label htmlFor="age">Age</label>
            <input 
                type="text" 
                name='age' 
                placeholder='age'
                onChange={changeHandler} />
            
            <label htmlFor="id">ID</label>
            <input 
                type="text" 
                name='id' 
                placeholder='id'
                onChange={changeHandler} 
            />
            
            <label htmlFor="birthday">Date of birth</label>
            <input 
                type="date" 
                name='birthday' 
                placeholder='date of birth'
                onChange={changeHandler}
            />
            
            <label htmlFor="address">Address</label>
            <input 
                type="text" 
                name='address' 
                placeholder='address' 
                onChange={changeHandler}
            />
            
            <label htmlFor="job">Occupation</label>
            <input 
                type="text" 
                name='job' 
                placeholder='occupation' 
                onChange={changeHandler}
            />

            <button type='submit'>Submit</button>
        </form>
        </div >
    )
}

export default TeamFrom;