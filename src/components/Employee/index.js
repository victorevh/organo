import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Employee.css'

export const Employee = ({employee, backgroundColor, onRemove, inFav, noFav}) => {
    function fav() {
        inFav(employee.id);
    }

    const propsFav ={
        size: 25,
        onClick: fav
    }

    return(
        <div className='employee'>
            <AiFillCloseCircle
                size={25}
                className="delete"
                onClick={() => onRemove(employee.id)}
            />
            <div className='header' style={{ backgroundColor: backgroundColor}}>
                <img src={employee.image} alt={employee.name} />
            </div>
            <div className='footer'>
                <h4>
                    {employee.name}
                </h4>
                <h5>
                    {employee.job}
                </h5>
                <div className='fav'>
                    {employee.fav 
                        ? <AiFillHeart {...propsFav} color='#ff0000'/>
                        : <AiOutlineHeart {...propsFav}/>}
                </div>

            </div>
        </div>
    )
}