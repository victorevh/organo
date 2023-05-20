import './Employee.css'

export const Employee = ({name, job, image, borderColor}) => {
    return(
        <div className='employee'>
            <div className='header' style={{ backgroundColor: borderColor}}>
                <img src={image} alt={name} />
            </div>
            <div className='footer'>
                <h4>
                    {name}
                </h4>
                <h5>
                    {job}
                </h5>
            </div>
        </div>
    )
}