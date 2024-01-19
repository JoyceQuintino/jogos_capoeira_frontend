import styles from './Card.module.css';

function Card({ id }) {
    return(
        <section className={styles.card}>
            <h2>Jogo</h2>
            {id}
        </section>
    );
}

export default Card;