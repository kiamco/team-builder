import React, { useState }from 'react';
import TeamForm from './components/teamForm.js'
import TeamList from './components/teamList.js'
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([{}]);

  const addNewTeammate = newMember => {
    setTeamMember([...teamMember, newMember]);
  };

  return (
    <div className="App">
      <TeamForm addNewTeammate={addNewTeammate} />
  {teamMember && <TeamList members={teamMember} /> }
    </div>
  );
}

export default App;
