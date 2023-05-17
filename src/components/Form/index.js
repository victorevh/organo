import './Form.css'
import TextField from '../TextField'
import DropdownList from '../DropdownList'
import Button from '../Button'

const Form = () => {
    const team = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const inSave = (event) => {
        
        event.preventDefault()
        console.log('Form sucedido')
    }

    return (
        <section className="forms">
            <form onSubmit={inSave} >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField mandatory={true} label="Nome" placeholder="Digite seu nome" />
                <TextField mandatory={true} label="Cargo" placeholder="Digite o endereço da imagem" />
                <TextField label="Imagem" placeholder="Digite seu cargo" />
                <DropdownList label="Time" itens={team} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}
export default Form