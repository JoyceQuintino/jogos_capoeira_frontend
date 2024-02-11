import styles from './Evaluation.module.css';
import React, { useState } from 'react';
import NotePlayer from '../../components/NotePlayer';
import Button from '../../components/Button';
import { useLocation } from 'react-router-dom';
import Category from '../../components/Category';

const playTypesName = {
    benguela: 'Benguela',
    sao_bento_grande: 'São Bento Grande',
    siriuna: 'Siriuna'
}

function Evaluation() {

    const location = useLocation();
    const playType = location.state?.playType;
    const category = location.state?.category;
    const modality = location.state?.modality;
    const competitorsMap = location.state?.competitorsMap;
    const matches = location.state?.matches;

    const playTypeName = playTypesName[playType] || playType;

    const competitorNames = matches.map(match => ({
        competidor_1: competitorsMap[match.id_competidor_1]?.apelido,
        competidor_2: competitorsMap[match.id_competidor_2]?.apelido
    }));

    console.log('Nomes dos jogadores:', competitorNames);
    console.log('Play - playType:', playType);
    console.log('Play - category:', category);
    console.log('Play - modality:', modality);
    console.log('Play - matches:', matches);

    const [noteCompetitor1, setNoteCompetitor1] = useState(0);
    const [noteCompetitor2, setNoteCompetitor2] = useState(0);
    const [noteplay, setNotePlay] = useState(0);

    return (
        <section className={styles.evaluationsection}>
            <Category category={category} />
            <h3>{modality}</h3>
            <section className={styles.evaluationContainer}>
                <div className={styles.evaluation}>
                    <div className={styles.infoplay}>
                        <h1>Jogo de {playTypeName}</h1>
                    </div>

                    <form action="" className={styles.evaluationform}>
                        <div className={styles.notes}>
                            <NotePlayer
                                apelido={competitorNames[0].competidor_1}
                                nota={noteCompetitor1}
                                setNota={setNoteCompetitor1}
                            />

                            <div className={styles.noteplayer} >
                                <label style={{
                                    fontSize: '30px',
                                    fontWeight: 'bold',
                                }}>Nota do jogo</label>

                                <input
                                    type="number"
                                    step="any"
                                    min="0"
                                    value={noteplay}
                                    onChange={(event) => setNotePlay(event.target.value)}
                                    max="5"
                                    style={{
                                        fontSize: '50px',
                                        height: '80px',
                                        width: '70px',
                                        marginTop: '5px'

                                    }}
                                />
                            </div>

                            <NotePlayer
                                apelido={competitorNames[0].competidor_2}
                                nota={noteCompetitor2}
                                setNota={setNoteCompetitor2}
                            />
                        </div>
                        <div className={styles.divButton}>
                            <Button>
                                Salvar Avaliação
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    );
}

export default Evaluation;