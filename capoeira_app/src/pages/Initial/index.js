import styles from './Initial.module.css';
import Banner from '../../components/Banner';
import { Link } from 'react-router-dom';

function Initial() {
    return (
        <>
            <div className={styles.containerInitialBanner}>
                <div className={styles.containerBannerImage}>
                    <Banner />
                </div>
            </div>
            <div className={styles.containerInitialButton}>
                <div className={styles.inputButton}>
                    <Link to="/modality" className={styles.button} type='submit'>Iniciar Competição</Link>
                </div>
            </div>
        </>
    );
}

export default Initial;