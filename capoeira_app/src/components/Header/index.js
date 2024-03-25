import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../images/logo.png';
import { useUser } from '../../context';

function Header(){
    const { user } = useUser();
    return (
        <header className={styles.header}>
            <img src={logo} alt="" className={styles.logo}/>
            <nav>
                <div className={styles.userContainer}>
                    {user ? (
                        <>
                            
                            <Link to="/modality"><span>Jogos</span></Link>
                            <span className={styles.username}>{user}</span>
                            {/* <button onClick={handleLogout} className={styles.logoutButton}>
                                Sair
                            </button> */}
                        </>  
                    ) : (
                        <Link to="/login"><span>Login</span></Link>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;