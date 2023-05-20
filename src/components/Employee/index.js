import './Employee.css'

export const Employee = ({name, job, image, borderColor, onRemove}) => {
    return(
        <div className='employee'>
            <div className='header' style={{ backgroundColor: borderColor}}>
                <div className="div1">
                    <button className="remove-button"onClick={onRemove}>
                         X
                    </button>
                </div>
                <div className="div2">
                    <img src={image} alt={name} />
                </div>
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