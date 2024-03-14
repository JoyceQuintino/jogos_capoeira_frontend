import { Link } from 'react-router-dom';
import styles from './CardPlaying.module.css';

const playTypesName = {
    benguela: 'Benguela',
    sao_bento_grande: 'São Bento Grande',
    siriuna: 'Siriuna'
}

function CardPlaying({ username, category, modality, playType, competitors, matches, competidores_categoria }) {

    const playTypeName = playTypesName[playType] || playType;

    return (
        <Link to="/evaluation" state={{ username, category, modality, playType, competitors, matches, competidores_categoria }}
            className={styles.button}>
            <section className={styles.card}>
                <h3>{playTypeName}</h3>
                <div className={styles.card_footer}></div>
            </section>
        </Link>
    );
}

export default CardPlaying;