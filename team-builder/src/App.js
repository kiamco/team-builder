import React, { useState }from 'react';
import TeamForm from './components/teamForm.js'
import TeamList from './components/teamList.js'
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([{
    name: 'kim',
    age: '24',
    id: '20259571',
    birthday: '11/10/1994',
    address: '34155 paviea',
    job: 'analyst'
  }]);

  const addNewTeammate = newMember => {
    setTeamMember([...teamMember, newMember]);
  };

  return (
    <div className="App">
      <TeamForm addNewTeammate={addNewTeammate} />
    <div className='team-container'>
      {teamMember && <TeamList members={teamMember} /> }
    </div>
    </div>
  );
}

export default App;
