import { Employee } from '../Employee'
import hexToRgba from 'hex-to-rgba'
import './Team.css'

export const Team = ({team, employees, onRemove, changeColor, inFav}) => {
   
    return (
        (employees.length > 0) && <section className='team' style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(team.color, '0.6')}}>
        <input 
            className="input-color" 
            value={team.color} type='color' 
            onChange={event => {
                changeColor(event.target.value, team.id)
            }} 
        />
        <h3 style={{ borderColor: team.color}}>
            {team.name}
        </h3>
        <div className='employees'>
            {employees.map((employee, id) => {
                return (
                    <Employee 
                        key={id} 
                        employee={employee} 
                        backgroundColor={team.color} 
                        onRemove={onRemove}
                        inFav={inFav}
                    />
                )
            })}
        </div>
        </section>
    )
}
