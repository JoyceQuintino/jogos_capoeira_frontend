import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './Initial.module.css';
import Banner from '../../components/Banner';
import { Link } from 'react-router-dom';

function Initial() {
    return (
        <>
            <Header />
            <div className={styles.containerInitialBanner}>
                <div className={styles.containerBannerImage}>
                    <Banner />
                </div>
            </div>
            <div className={styles.containerInitialButton}>
                <div className={styles.inputButton}>
                    <Link to="/" className={styles.button} type='submit'>Iniciar Competição</Link>
                </div>
            </div>
            
            <Footer />
        </>
    );
}

export default Initial;