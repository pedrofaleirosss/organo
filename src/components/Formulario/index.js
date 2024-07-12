import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ times, aoColaboradorCadastrado, aoTimeCadastrado }) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('#000000');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        aoColaboradorCadastrado({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    const aoSalvarTime = (evento) => {
        evento.preventDefault();
        aoTimeCadastrado({
            id: uuidv4(),
            nome: nomeTime,
            cor: corTime
        });
        setNomeTime('');
        setCorTime('#000000');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo 
                    label="Nome" 
                    placeholder="Digite o nome" 
                    obrigatorio={true} 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo 
                    label="Cargo" 
                    placeholder="Digite o cargo" 
                    obrigatorio={true} 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label="Time" 
                    itens={times} 
                    obrigatorio={true} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>

            <form onSubmit={aoSalvarTime}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo 
                    label="Nome" 
                    placeholder="Digite o nome" 
                    obrigatorio={true} 
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo 
                    type='color'
                    label="Cor" 
                    placeholder="Digite a cor" 
                    obrigatorio={true} 
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>Criar Time</Botao>
            </form>
        </section>
    );
}

export default Formulario;
