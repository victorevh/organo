import { useState } from 'react';
import { Banner } from './components/Banner';
import { Form } from './components/Form';
import { Team } from './components/Team';

function App() {

  const teams = [
    {
      name: 'Progamação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06869',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ]
  
  const [employees, setEmployees] = useState([])

  const [employeeIdCounter, setEmployeeIdCounter] = useState(1);

  const addNewEmployee = (employee) => {
    const newEmployee = { ...employee, id: employeeIdCounter };
    setEmployees([...employees, newEmployee]);
    setEmployeeIdCounter((prevCounter) => prevCounter + 1);
  }
  
  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(teams => teams.name)} registerEmployee={employee => addNewEmployee(employee)} />

      {teams.map(teams => <Team 
        key={teams.name} 
        name={teams.name} 
        primaryColor={teams.primaryColor} 
        secondaryColor={teams.secondaryColor}
        employees={employees.filter(employee => employee.teamState === teams.name)}
      />)}

    </div>
  );
}

export default App;
