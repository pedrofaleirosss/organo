import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = ({ id, nome, cor, colaboradores, aoDeletar, mudarCor }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundColor: hexToRgba(cor, '0.6') }}>
            <input type='color' className='input-cor' value={cor} onChange={evento => mudarCor(id, evento.target.value)} />
            <h3 style={{ borderColor: cor }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) =>  <Colaborador
                        key={indice}
                        id={colaborador.id}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corDeFundo={cor}
                        aoDeletar={aoDeletar}
                    />
                )}
            </div>
        </section>
    );
}

export default Time;
