import './Form.css'
import { TextField } from '../TextField'
import { DropdownList } from '../DropdownList'
import { Button } from '../Button'
import { useState } from 'react'

export const Form = (props) => {

    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [image, setImage] = useState('');
    const [teamState, setTeam] = useState('');

    const inSave = (event) => {
        
        event.preventDefault()
        props.registerEmployee({
            name,
            job,
            image,
            teamState
        })
        setName('')
        setJob('')
        setImage('')
        setTeam('')
    
    }

    return (
        <section className="forms">
            <form onSubmit={inSave} >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    mandatory={true}
                    label="Nome" 
                    placeholder="Digite seu nome..."
                    value={name}
                    modify={value => setName(value)}
                />
                <TextField 
                    mandatory={true}
                    label="Cargo" 
                    placeholder="Digite seu cargo..."
                    value={job} 
                    modify={value => setJob(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem..." 
                    value={image}
                    modify={value => setImage(value)}
                />
                <DropdownList
                    mandatory={true}
                    label="Time"
                    itens={props.teams}
                    value={teamState}
                    modify={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}
