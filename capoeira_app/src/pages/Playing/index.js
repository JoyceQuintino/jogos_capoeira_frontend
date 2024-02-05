import CardPlaying from '../../components/CardPlaying';
import Category from '../../components/Category';
import styles from './Playing.module.css';
import { useLocation } from 'react-router-dom';

function Playing() {

    const location = useLocation();
    const modality = location.state?.modality;
    const category = location.state?.category;
    const playType = location.state?.playType;

    return (
        <section className={styles.playing}>
            <Category category={category} />
            <h3>{modality}</h3>
            <section className={styles.card_list}>
                {Object.keys(playType).length > 0 ? (
                    <section className={styles.card_list}>
                        {Object.keys(playType).map((chave) => (
                            chave !== 'genero' && (
                                <CardPlaying playType={chave} key={chave} />
                            )
                        ))}
                    </section>
                ) : (
                    <p>Carregando jogos...</p>
                )}
            </section>
        </section>
    );
}

export default Playing;
