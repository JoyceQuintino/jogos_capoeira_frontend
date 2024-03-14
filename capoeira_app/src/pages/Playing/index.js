import CardPlaying from '../../components/CardPlaying';
import Category from '../../components/Category';
import styles from './Playing.module.css';
import { useLocation } from 'react-router-dom';

function Playing() {

    const location = useLocation();
    const modality = location.state?.modality;
    const category = location.state?.category;
    const playType = location.state?.playType;
    const competidores_categoria = location.state?.competidores_categoria;
    const username = location.state?.username;

    console.log(category);
    console.log(username);
    console.log(modality);
    console.log('competidores_categoria:', competidores_categoria);


    const extractCompetitorIds = (matches) => {
        const competitorIds = [];
        Object.values(matches).forEach((match) => {
            if (match.id_competidor_1) {
                competitorIds.push(match.id_competidor_1);
            }
            if (match.id_competidor_2) {
                competitorIds.push(match.id_competidor_2);
            }
        });
        return competitorIds;
    };

    return (
        <section className={styles.playing}>
            <Category category={category}>
                <h3>{modality}</h3>
                <section className={styles.card_list}>
                    {Object.keys(playType).length > 0 ? (
                        <section className={styles.card_list}>
                            {Object.keys(playType).map((type) => (
                                type !== 'genero' && (
                                    <CardPlaying 
                                        username={username} 
                                        category={category} 
                                        modality={modality} 
                                        playType={type} 
                                        competitors={extractCompetitorIds(playType[type])} 
                                        matches={playType[type]} 
                                        competidores_categoria={competidores_categoria} 
                                        key={type} 
                                    />
                                )
                            ))}
                        </section>
                    ) : (
                        <p>Carregando jogos...</p>
                    )}
                </section>
            </Category>
        </section>
    );
}

export default Playing;