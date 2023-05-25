import './Field.css'

export const Field = ({ type = 'text', label, placeholder, value, modify, mandatory = false}) => {

   const placeHolder = `${placeholder}`

   const newContent = (event) => {
      modify(event.target.value)
   }
   
    return (
       <div className={`field field-${type}`}>
        <label>
         {label}
         </label>
        <input 
         type={type} 
         value={value} 
         onChange={newContent} 
         required={mandatory} 
         placeholder={placeHolder}/>
       </div>
    )
}