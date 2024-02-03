import styles from './Category.module.css';
import jogos from '../../json/jogos.json';

export const categories = [
    "Laranja - Laranja Azul",
    "Azul - Azul Verde",
    "Verde - Verde Roxo"
]

export function filterCategory(id) {
    return jogos.filter( jogo => jogo.categoria === categories[id] )
}

function Category({ category, children }) {
    return (
        <section>
            <h2>{category}</h2>
            <section className={styles.category}>
                <div>
                    { children }
                </div>
            </section>
        </section>
    );
}

export default Category;