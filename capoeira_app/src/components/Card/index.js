import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card({ modality, category, playType, competidores_categoria }) {
    return (
        <Link
            to="/playing" state={{ modality, category, playType, competidores_categoria }}
            className={styles.button}
        >
            <section className={styles.card}>
                <h3>{modality}</h3>
                <div className={styles.card_footer}></div>
            </section>
        </Link>
    );
}

export default Card;