import './Colaborador.css';
import { IoIosCloseCircle } from "react-icons/io";

const Colaborador = ({ id, nome, cargo, imagem, corDeFundo, aoDeletar }) => {
    return (
        <div className='colaborador'>
            <IoIosCloseCircle size={25} className='colaborador__deletar' onClick={() => aoDeletar(id)}/>
            <div className='colaborador__cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={`Foto de ${nome}`}/>
            </div>
            <div className='colaborador__rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
}

export default Colaborador;
