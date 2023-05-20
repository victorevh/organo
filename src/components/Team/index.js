import { Employee } from '../Employee'
import './Team.css'

export const Team = (props) => {
   
    const backgroundColor = {backgroundColor: props.secondaryColor}
    const borderColor = {borderColor: props.primaryColor}
    
    const handleRemoveEmployee = (id) => {
        // Filtra os funcionários para remover o funcionário com o ID correspondente
        const updatedEmployees = props.employees.filter((employee) => employee.id !== id);
    
        // Atualiza o estado dos funcionários no componente App usando a função setEmployees
        props.setEmployees(updatedEmployees);
    
        // Remove o funcionário com o ID correspondente do localStorage
        const savedEmployees = localStorage.getItem('employees');
        if (savedEmployees) {
          const employees = JSON.parse(savedEmployees);
          const updatedLocalStorage = employees.filter((employee) => employee.id !== id);
          localStorage.setItem('employees', JSON.stringify(updatedLocalStorage));
        }
      };

    return (
        (props.employees.length > 0) ? <section className='team' style={backgroundColor}>
        <h3 style={borderColor}>
            {props.name}
        </h3>
        <div className='employees'>
            {props.employees.map(employee => <Employee backgroundColor={borderColor} key={employee.id} name={employee.name} job={employee.job} image={employee.image} onRemove={() => handleRemoveEmployee(employee.id)} />)}
        </div>

    </section> : ''
    )
}
