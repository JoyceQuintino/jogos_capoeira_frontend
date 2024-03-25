import styles from './Initial.module.css';
import Banner from '../../components/Banner';
import { Link, useLocation } from 'react-router-dom';

function Initial() {
    const location = useLocation();
    const user_id = location.state?.user_id;
    return (
        <>
            <div className={styles.containerInitialBanner}>
                <div className={styles.containerBannerImage}>
                    <Banner />
                </div>
            </div>
            <div className={styles.containerInitialButton}>
                <div className={styles.inputButton}>
                    <Link to="/modality" state={{user_id}} className={styles.button} type='submit'>Iniciar Competição</Link>
                </div>
            </div>
        </>
    );
}

export default Initial;