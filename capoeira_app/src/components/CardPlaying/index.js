import { Link } from 'react-router-dom';
import styles from './CardPlaying.module.css';
import { BsArrowRight } from 'react-icons/bs';

const playTypesName = {
    benguela: 'Benguela',
    sao_bento_grande: 'São Bento Grande',
    siriuna: 'Siriuna'
}

function CardPlaying({ category, modality, playType, competitors, matches, competidores_categoria }) {

    const playTypeName = playTypesName[playType] || playType;

    return(
        <section className={styles.card}>
            <h3>{playTypeName}</h3>
            <div className={styles.card_footer}>
                <Link
                    to="/play" state={{category, modality, playType, competitors, matches, competidores_categoria}}
                    className={styles.button}
                >
                    <BsArrowRight />
                </Link>
            </div>
        </section>
    );
}

export default CardPlaying;