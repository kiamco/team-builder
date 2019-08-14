import React, { useState }from 'react';
import TeamForm from './components/teamForm.js'
import TeamList from './components/teamList.js'
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([{
    name: '',
    age: '',
    id: '',
    birthday: '',
    address: '',
    job: ''
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
