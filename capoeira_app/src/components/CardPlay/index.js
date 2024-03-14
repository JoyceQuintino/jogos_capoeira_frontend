import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CardPlay.module.css';

const playTypesName = {
    benguela: 'Benguela',
    sao_bento_grande: 'São Bento Grande',
    siriuna: 'Siriuna'
}

function Competitors({ playTypeName, jogo, competitorsMap, index }) {
    console.log('JogoCard - jogo:', jogo);
    return (
        <div key={jogo.id} className={styles.container}>
            <div className={styles.div1}>
                <h3>Jogo de {playTypeName}</h3>
            </div>
            <div className={styles.div2}>
                {jogo.id_competidor_1 && jogo.id_competidor_2 && (
                    <h3>{competitorsMap[jogo.id_competidor_1]?.apelido} & {competitorsMap[jogo.id_competidor_2]?.apelido}</h3>
                )}
            </div>
        </div>
    );
}

function CardPlay({ username, category, modality, playType, matches, competitorsMap }) {

    const playTypeName = playTypesName[playType] || playType;

    return (
        <Link to='/evaluation' state={{username, category, modality, playType, matches, competitorsMap}} className={styles.button}>
            <section className={styles.card}>
                <div className={styles.card_footer}>
                    {matches && Object.values(matches).map((match, index) => (
                        <Competitors
                            key={match.id}
                            playTypeName={playTypeName}
                            jogo={match}
                            competitorsMap={competitorsMap}
                            index={index}
                        />
                    ))}
                </div>
            </section>
        </Link>
    );
}

export default CardPlay;
