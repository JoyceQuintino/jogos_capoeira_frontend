import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../images/logo.png';

function Header(){
    const location = useLocation();
    const username = location.state?.username;

    const handleLogout = () => {
        
    };

    return (
        <header className={styles.header}>
            <img src={logo} alt="" className={styles.logo}/>
            <nav>
                <div className={styles.userContainer}>
                    {username ? (
                        <>
                            <span className={styles.username}>{username}</span>
                            <button onClick={handleLogout} className={styles.logoutButton}>
                                Sair
                            </button>
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