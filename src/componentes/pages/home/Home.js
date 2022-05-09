import './Home.css';
import bee from '../../../assets/images/bee_grande.png';
import logo from '../../../assets/images/Logo-marrom.png';
import { Link } from 'react-router-dom';



function meuEvento(){
    console.log("deu bom")
   

}


function Home(){
    return (
        <section className="home" id="home">
            <div className='logos'>
                <img src={bee} className="bee" alt=''/>
                <img src={logo} className="logo"/>
            </div>
             <Link to="/main" className='btn botao-entrar'>Bee  Happy </Link> 
        </section>
    );

}
export default Home;