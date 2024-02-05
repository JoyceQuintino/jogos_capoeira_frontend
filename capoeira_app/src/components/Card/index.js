import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { BsArrowRight } from 'react-icons/bs'

function Card({ modality, category, playType }) {
    return (
        <section className={styles.card}>
            <h3>{modality}</h3>
            <div className={styles.card_footer}>
                <Link
                    to="/playing" state={{ modality, category, playType }}
                    className={styles.button}
                >
                    <BsArrowRight />
                </Link>
            </div>
        </section>
    );
}

export default Card;