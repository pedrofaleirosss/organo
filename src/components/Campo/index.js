import './Campo.css';

const Campo = ({ type = 'text', label, placeholder, obrigatorio = false, valor, aoAlterado }) => {
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={(evento) => aoAlterado(evento.target.value)} 
                placeholder={placeholder} 
                required={obrigatorio} 
            />
        </div>
    );
}

export default Campo;
