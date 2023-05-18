import Employee from '../Employee'
import './Team.css'

const Team = (props) => {
   
    const backgroundColor = {backgroundColor: props.secondaryColor}
    const borderColor = {borderColor: props.primaryColor}

    return (
        (props.employees.length > 0) ? <section className='team' style={backgroundColor}>
        <h3 style={borderColor}>
            {props.name}
        </h3>
        <div className='employees'>
            {props.employees.map(employee => <Employee name={employee.name} job={employee.job} image={employee.image}/>)}
        </div>

    </section> : ''
    )
}

export default Team