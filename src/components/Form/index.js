import './Form.css'
import { Field } from '../Field'
import { DropdownList } from '../DropdownList'
import { Button } from '../Button'
import { useState } from 'react'

export const Form = ({registerEmployee, teams, addNewTeam}) => {

    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const [nameTeam, setNameTeam] = useState('');
    const [colorTeam, setColorTeam] = useState('');


    const inSave = (event) => {
        
        event.preventDefault()
        registerEmployee({
            name,
            job,
            image,
            team
        })
        setName('');
        setJob('');
        setImage('');
        setTeam('');
    
    }

    return (
        <section className='form-container'>
            <form className='form' onSubmit={inSave} >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Field 
                    mandatory={true}
                    label='Nome' 
                    placeholder='Digite seu nome...'
                    value={name}
                    modify={value => setName(value)}
                />
                <Field 
                    mandatory={true}
                    label='Cargo' 
                    placeholder='Digite seu cargo...'
                    value={job} 
                    modify={value => setJob(value)}
                />
                <Field 
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem...' 
                    modify={value => setImage(value)}
                />
                <DropdownList
                    mandatory={true}
                    label='Time'
                    itens={teams}
                    value={team}
                    modify={value => setTeam(value)}
                />
                <Button text='Criar um novo card' />
            </form>
            <form className='form' onSubmit={(event) => {
                event.preventDefault()
                addNewTeam({name: nameTeam, color: colorTeam});
                setNameTeam('');
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Field 
                    mandatory
                    label='Nome' 
                    placeholder='Digite o nome do time...'
                    value={nameTeam}
                    modify={value => setNameTeam(value)}
                />
                <Field 
                    mandatory
                    type='color'
                    label='Cor' 
                    placeholder='Digite a cor do time...'
                    value={colorTeam} 
                    modify={value => setColorTeam(value)}
                />
                <Button text='Criar um novo time' />
            </form>
        </section>
    )
}
