import styles from './Category.module.css';

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