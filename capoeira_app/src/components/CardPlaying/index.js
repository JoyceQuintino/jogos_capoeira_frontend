import { Link } from 'react-router-dom';
import styles from './CardPlaying.module.css';
import { BsArrowRight } from 'react-icons/bs'

function CardPlaying({ playType }) {
    return(
        <section className={styles.card}>
            <h3>{playType}</h3>
            <div className={styles.card_footer}>
                <Link
                    to="/play"
                    className={styles.button}
                >
                    <BsArrowRight />
                </Link>
            </div>
        </section>
    );
}

export default CardPlaying;