import styles from './Card.module.css';

function Card({ id }) {
    return(
        <section className={styles.card}>
            {id}
        </section>
    );
}

export default Card;