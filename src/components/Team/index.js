import { Employee } from '../Employee'
import hexToRgba from 'hex-to-rgba'
import './Team.css'

export const Team = ({team, employees, onRemove, changeColor}) => {
   
    return (
        (employees.length > 0) && <section className='team' style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(team.color, '0.6')}}>
        <input className="input-color" onChange={event => changeColor(event.target.value, team.id)} value={team.color} type='color' />
        <h3 style={{ borderColor: team.color}}>
            {team.name}
        </h3>
        <div className='employees'>
            {employees.map((employee, id) => {
                return <Employee key={id} employee={employee} backgroundColor={{ borderColor: team.color}} onRemove={onRemove}/>
            })}
        </div>
        </section>
    )
}
