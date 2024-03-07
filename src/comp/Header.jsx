import './styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div id='header'>
            <Link to={"/"}><img
                src='https://raw.githubusercontent.com/MorchClient/resources/images/minecraftDot.png'
                alt='Logo'
                width='50'
            /></Link>
            <div id='links'>
                <Link to={"/docs"}><button >Docs</button></Link>
                <Link to={"/downloads"}><button >Downloads</button></Link>
                <Link to={"https://github.com/morchclient"}><button >GitHub</button></Link>
                <Link to={"https://discord.gg/WJmDhcctV8"}><button >Discord</button></Link>
            </div>
        </div>
    );
}

export default Header;
