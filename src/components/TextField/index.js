import './TextField.css'

export const TextField = ({label, placeholder, value, modify, mandatory = false}) => {

   const placeHolder = `${placeholder}`

   

   const newContent = (event) => {
      modify(event.target.value)
   }
   
    return (
       <div className="text-field">
        <label>
         {label}
         </label>
        <input value={value} onChange={newContent} required={mandatory} placeholder={placeHolder}/>
       </div>
    )
}