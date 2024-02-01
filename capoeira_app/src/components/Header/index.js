import styles from './Header.module.css';
import logo from '../../images/logo.png';

function Header(){
    return (
        <header className={styles.header}>
            <img src={logo} alt="" className={styles.logo}/>
            <nav>
                {/*<Link to="/login">Entrar</Link>*/}
            </nav>
        </header>
    );
}

export default Header;