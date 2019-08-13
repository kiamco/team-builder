import React, { useState }from 'react';
import TeamForm from './components/teamFrom.js'
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState({
    name:'',
    age:'',
    id:'',
    birthday:'',
    address:'',
    occupation:''
  });

  return (
    <div className="App">
      <TeamForm />
    </div>
  );
}

export default App;
