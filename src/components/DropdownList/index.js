import './DropdownList.css'

export const DropdownList = ({label, itens, modify, value, mandatory = false}) => {

    return(
        <div className="dropdown-list">
            <label>
                {label}
            </label>
            <select onChange={event => modify(event.target.value)} required={mandatory} value={value}>
                    <option />
                    {itens.map(item => { 
                       return <option key={item}>{item}</option>
                    })}
            </select>
        </div>
    )
}