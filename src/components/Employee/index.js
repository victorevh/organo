import { AiFillCloseCircle } from 'react-icons/ai'
import './Employee.css'

export const Employee = ({employee, color, onRemove}) => {
    return(
        <div className='employee'>
            <AiFillCloseCircle
                size={25}
                className="delete"
                onClick={() => onRemove(employee.id)}
            />
            <div className='header' style={{ backgroundColor: color}}>
                <img src={employee.image} alt={employee.name} />
            </div>
            <div className='footer'>
                <h4>
                    {employee.name}
                </h4>
                <h5>
                    {employee.job}
                </h5>

            </div>
        </div>
    )
}