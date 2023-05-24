import './Employee.css'

export const Employee = ({employee, backgroundColor}) => {
    return(
        <div className='employee'>
            <div className='header' style={{ backgroundColor: backgroundColor}}>
                <div className="div1">

                </div>
                <div className="div2">
                    <img src={employee.image} alt={employee.name} />
                </div>
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