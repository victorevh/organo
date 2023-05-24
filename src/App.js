import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Banner } from './components/Banner';
import { Form } from './components/Form';
import { Team } from './components/Team';

function App() {

  const [teams, setTeams] =  useState([
    {
      id: uuidv4(),
      name: 'Progamação',
      color: '#57C278',
    },
    { 
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA',
    },
    { 
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157',
    },
    { 
      id: uuidv4(),
      name: 'Devops',
      color: '#E06869',
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#DB6EBF',
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05',
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29',
    },
  ])
  
  const [employees, setEmployees] = useState([])

  function removeEmployee(id) {
    setEmployees(employees.filter(employee => employee.id !== id));
  }

  function changeColorTeam(color, id) {
    setTeams(teams.map(team => {
      if(team.id === id) {
        team.color = color;
      }
      return team;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(teams => teams.name)} registerEmployee={employee => setEmployees([...employees, employee])} />
      <section className="teams">
        <h1>Minha organização</h1>
        {teams.map((teams, id) => <Team 
          changeColor={changeColorTeam}
          key={id} 
          team={teams}
          employees={employees.filter(employee => employee.teamState === teams.name)}
          onRemove={removeEmployee}
        />)}
      </section>


    </div>
  );
}

export default App;
