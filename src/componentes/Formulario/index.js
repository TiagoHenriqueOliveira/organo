import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.isColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });
        // console.log("Formulário foi submetido!", nome, cargo, imagem, time);
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador!</h2>
                <CampoTexto
                    requerido={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                />

                <CampoTexto
                    requerido={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                />

                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    requerido={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterar={valor => setTime(valor)}
                />

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;