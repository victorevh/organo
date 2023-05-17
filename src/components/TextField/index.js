import './TextField.css'

const TextField = (props) => {

   const placeHolder = `${props.placeholder}`
   
    return (
       <div className="text-field">
        <label>
         {props.label}
         </label>
        <input required={props.mandatory} placeholder={placeHolder}/>
       </div>
    )
}

export default TextField