import styles from './Play.module.css';
import jogos from '../../json/jogos.json';

export const playies = [
    "Benguela",
    "São Bento Grande",
    "Siriuna"
]

export function filterPlayies(id) {
    return jogos.filter( jogo => jogo.jogo === playies[id] ) 
}

function Play({ play, children }) {
    return (
        <section>
            <h2>{play}</h2>
            <section className={styles.play}>
                <div>
                    { children }
                </div>
            </section>
        </section>
    );
}

export default Play;