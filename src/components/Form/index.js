import './Form.css'
import TextField from '../TextField'
import DropdownList from '../DropdownList'

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

    return (
        <section className="forms">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite o endereço da imagem" />
                <TextField label="Imagem" placeholder="Digite seu cargo" />
                <DropdownList label="Time" itens={team} />
            </form>
        </section>
    )
}
export default Form