import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Play.module.css';
import CardPlay from '../../components/CardPlay';
import Category from '../../components/Category';

function Play() {
    const location = useLocation();
    const playType = location.state?.playType;
    const competitors = location.state?.competitors;
    const matches = location.state?.matches;
    const category = location.state?.category;
    const modality = location.state?.modality;
    const competitorsCategoria = location.state?.competidores_categoria;
    const username = location.state?.username;

    console.log('Play - playType:', playType);
    console.log('Play - competitors:', competitors);
    console.log('Play - category:', category);
    console.log('Play - modality:', modality);
    console.log('Play - matches:', matches);
    console.log('Play - competitorsCategoria:', competitorsCategoria);

    // Verifique se a lista de competidores_categoria existe antes de prosseguir
    if (!competitorsCategoria) {
        return <p>Carregando jogos...</p>;
    }

    // Crie um mapa associando IDs de competidores aos objetos competidores_categoria
    const competitorsMap = Object.fromEntries(
        competitorsCategoria.map(competitor => [competitor.id, competitor])
    );

    return (
        <section className={styles.play}>
            <Category category={category}>
            <h3>{modality}</h3>
            <section className={styles.card_list}>
                    {matches && Object.values(matches).map((match) => (
                        <CardPlay
                            key={match.id}
                            username={username}
                            category={category}
                            modality={modality}
                            playType={playType}
                            matches={[match]}
                            competitorsMap={competitorsMap}
                        />
                    ))}
                    {matches && Object.values(matches).length === 0 && (
                        <p>Sem partidas disponíveis</p>
                    )}
                </section>
            </Category>
        </section>
    );
}

export default Play;
