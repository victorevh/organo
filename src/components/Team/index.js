import { Employee } from '../Employee'
import './Team.css'

export const Team = ({team, employees}) => {
   
    const secondaryColor = {borderColor: team.secondaryColor}


    return (
        (employees.length > 0) ? <section className='team' style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: team.primaryColor}}>
        <h3 style={secondaryColor}>
            {team.name}
        </h3>
        <div className='employees'>
            {employees.map((employee, id) => <Employee key={id} employee={employee} backgroundColor={secondaryColor} />)}
        </div>

    </section> : ''
    )
}
