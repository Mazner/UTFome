import './Header.css';
import logo from '../../../assets/images/Logo_grande.png';

import { FaBars } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/auth';
import { Link } from 'react-router-dom';

function Header(){

    const { authenticated } = useContext(AuthContext);

    function openMenu(){
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    }
    
    window.onscroll = () =>{
        let navbar = document.querySelector('.navbar');
        navbar.classList.remove('active');
    }

    return (
            <header className='header'>

                <a href='#' className='logo'>
                    <img src={logo}></img>
                </a>

                <nav className='navbar'>
                    <Link to="/main">HOME</Link>
                    <Link to="/produtos">PRODUTOS</Link>
                    <a href='#anunciar'>ANUNCIAR</a>
                    <Link to="/sobre">SOBRE</Link>
                    <Link to="/contato">CONTATO</Link>
                    <Link to="/perfil">PERFIL</Link>
                </nav>

                <div className='icons'>
                    <div id='menu-btn' onClick={openMenu}>
                        <FaBars />
                    </div>
                </div>

            </header>
    );
}

export default Header;