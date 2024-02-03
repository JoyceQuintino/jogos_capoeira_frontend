import styles from './Card.module.css';

function Card({id, jogo}) {
    return(
        <section className={styles.card}>
            <h2>Jogo de {jogo}</h2>
            { id }
        </section>
    );
}

export default Card;