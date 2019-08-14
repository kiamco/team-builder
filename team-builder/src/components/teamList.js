import React ,{ useState } from 'react';
import Teammate from './teammate.js'

const TeamList = (props) => {
    console.log(props.teamMember);
    
    return(
        <div className='team-container'>
            {props.members.map(el => <Teammate name={el.name} age={el.age} id={el.id} address={el.address} job={el.job} />)}
        </div> 
    )
}

export default TeamList