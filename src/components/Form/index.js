import './Form.css'
import TextField from '../TextField'

const Form = () => {
    return (
        <section className="forms">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite o endereço da imagem" />
                <TextField label="Imagem" placeholder="Digite seu cargo" />
            </form>
        </section>
    )
}
export default Form