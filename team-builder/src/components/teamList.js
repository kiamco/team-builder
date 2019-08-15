import React ,{ useState } from 'react';
import Teammate from './teammate.js'

const TeamList = (props) => {    
    return(
        <div className='team-parent-container'>
            {props.members.map(el => <Teammate name={el.name} age={el.age} id={el.id} birthday={el.birthday} address={el.address} job={el.job} />)}
        </div> 
    )
}

export default TeamList