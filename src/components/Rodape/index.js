import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='icones'>
                <a href="facebook.com">
                    <img src="/img/fb.png" alt="Ícone do Facebook"/>
                </a>
                <a href="twitter.com">
                    <img src="/img/tw.png" alt="Ícone do X" />
                </a>
                <a href="instagram.com">
                    <img src="/img/ig.png" alt="Ícone do Instagram" />
                </a>
            </div>
            <img src="/img/logo.png" alt="Logo do Organo"></img>
            <p>Desenvolvido por Pedro</p>
        </footer>
    );
}

export default Rodape;
