import './TextField.css'

export const TextField = (props) => {

   const placeHolder = `${props.placeholder}`

   

   const newContent = (event) => {
      props.modify(event.target.value)
   }
   
    return (
       <div className="text-field">
        <label>
         {props.label}
         </label>
        <input value={props.value} onChange={newContent} required={props.mandatory} placeholder={placeHolder}/>
       </div>
    )
}