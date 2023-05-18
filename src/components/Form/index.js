import './Form.css'
import TextField from '../TextField'
import DropdownList from '../DropdownList'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {

    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [image, setImage] = useState('');
    const [teamState, setTeam] = useState('');

    const inSave = (event) => {
        
        event.preventDefault()
        console.log('Form sucedido =>', name, job, image, teamState)
        props.registerEmployee({
            name,
            job,
            image,
            teamState
        })
    }

    return (
        <section className="forms">
            <form onSubmit={inSave} >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    mandatory={true}
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={name}
                    modify={value => setName(value)}
                />
                <TextField 
                    mandatory={true}
                    label="Cargo" 
                    placeholder="Digite o endereço da imagem"
                    value={job} 
                    modify={value => setJob(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite seu cargo" 
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
export default Form