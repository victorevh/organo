import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Banner } from './components/Banner';
import { Form } from './components/Form';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

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

  const start = [
    {
      id: uuidv4(),
      fav: false,
      name: 'Victor Oliveira',
      job: 'Desenvolvedor de software',
      image: 'https://github.com/victorevh.png',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      fav: false,
      name: 'Yasmin Jandriele',
      job: 'Desenvolvedora JavaScript',
      image: 'https://github.com/yasjcarvalho.png',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      fav: false,
      name: 'Juan Pinheiro',
      job: 'Desenvolvedor JavaScript',
      image: 'https://github.com/juanpinheirx.png',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'Rubem Ferreira',
      job: 'Desenvolvedor de software',
      image: 'https://github.com/rubemfsv.png',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      fav: false,
      name: 'Victor Oliveira',
      job: 'Desenvolvedor de software',
      image: 'https://github.com/victorevh.png',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      fav: false,
      name: 'Yasmin Jandriele',
      job: 'Desenvolvedora JavaScript',
      image: 'https://github.com/yasjcarvalho.png',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      fav: false,
      name: 'Juan Pinheiro',
      job: 'Desenvolvedor JavaScript',
      image: 'https://github.com/juanpinheirx.png',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      name: 'Rubem Ferreira',
      job: 'Desenvolvedor de software',
      image: 'https://github.com/rubemfsv.png',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      fav: false,
      name: 'Victor Oliveira',
      job: 'Desenvolvedor de software',
      image: 'https://github.com/victorevh.png',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      fav: false,
      name: 'Yasmin Jandriele',
      job: 'Desenvolvedora JavaScript',
      image: 'https://github.com/yasjcarvalho.png',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      fav: false,
      name: 'Juan Pinheiro',
      job: 'Desenvolvedor JavaScript',
      image: 'https://github.com/juanpinheirx.png',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      name: 'Rubem Ferreira',
      job: 'Desenvolvedor de software',
      image: 'https://github.com/rubemfsv.png',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      fav: false,
      name: 'Victor Oliveira',
      job: 'Desenvolvedor de software',
      image: 'https://github.com/victorevh.png',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      fav: false,
      name: 'Yasmin Jandriele',
      job: 'Desenvolvedora JavaScript',
      image: 'https://github.com/yasjcarvalho.png',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      fav: false,
      name: 'Juan Pinheiro',
      job: 'Desenvolvedor JavaScript',
      image: 'https://github.com/juanpinheirx.png',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      name: 'Rubem Ferreira',
      job: 'Desenvolvedor de software',
      image: 'https://github.com/rubemfsv.png',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      fav: false,
      name: 'Victor Oliveira',
      job: 'Desenvolvedor de software',
      image: 'https://github.com/victorevh.png',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      fav: false,
      name: 'Yasmin Jandriele',
      job: 'Desenvolvedora JavaScript',
      image: 'https://github.com/yasjcarvalho.png',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      fav: false,
      name: 'Juan Pinheiro',
      job: 'Desenvolvedor JavaScript',
      image: 'https://github.com/juanpinheirx.png',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      name: 'Rubem Ferreira',
      job: 'Desenvolvedor de software',
      image: 'https://github.com/rubemfsv.png',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      fav: false,
      name: 'Victor Oliveira',
      job: 'Desenvolvedor de software',
      image: 'https://github.com/victorevh.png',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      fav: false,
      name: 'Yasmin Jandriele',
      job: 'Desenvolvedora JavaScript',
      image: 'https://github.com/yasjcarvalho.png',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      fav: false,
      name: 'Juan Pinheiro',
      job: 'Desenvolvedor JavaScript',
      image: 'https://github.com/juanpinheirx.png',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      name: 'Rubem Ferreira',
      job: 'Desenvolvedor de software',
      image: 'https://github.com/rubemfsv.png',
      team: teams[5].name
    },
  ]
  
  const [employees, setEmployees] = useState(start)

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

  function addTeam(newTeam) {
    setTeams([...teams, {...newTeam, id: uuidv4()}])
  }

  function resolveFav(id) {
    setEmployees(employees.map(employee => {
      if(employee.id === id) employee.fav = !employee.fav;
      return employee
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        addNewTeam={addTeam}
        teams={teams.map(teams => teams.name)} 
        registerEmployee={employee => setEmployees([...employees, employee])} 
      />
      <section className="teams">
        <h1>Minha organização</h1>
        {teams.map((teams, id) => <Team 
          inFav={resolveFav}
          changeColor={changeColorTeam}
          key={id} 
          team={teams}
          employees={employees.filter(employee => employee.team === teams.name)}
          onRemove={removeEmployee}
        />)}
      </section>
      <Footer />


    </div>
  );
}

export default App;
