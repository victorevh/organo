import './TextField.css'

const TextField = (props) => {

   const placeHolder = `${props.placeholder}`
   
    return (
       <div className="text-field">
        <label>
         {props.label}
         </label>
        <input placeholder={placeHolder}/>
       </div>
    )
}

export default TextField