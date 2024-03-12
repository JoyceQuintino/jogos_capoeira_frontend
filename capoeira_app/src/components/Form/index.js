import React, { useState } from 'react';
import Category from '../Category';
import Button from '../Button';
import NotePlayer from '../NotePlayer';
import styles from './Form.module.css';

const playTypesName = {
  benguela: 'Benguela',
  sao_bento_grande: 'São Bento Grande',
  siriuna: 'Siriuna',
};

function CardEvaluation({ category, modality, playType, match, competitorsMap, onNextClick }) {
  const playTypeName = playTypesName[playType] || playType;

  const competitor1 = competitorsMap[match?.id_competidor_1]?.apelido || 'Competidor 1';
  const competitor2 = competitorsMap[match?.id_competidor_2]?.apelido || 'Competidor 2';

  const [noteCompetitor1, setNoteCompetitor1] = useState(0);
  const [noteCompetitor2, setNoteCompetitor2] = useState(0);
  const [noteplay, setNotePlay] = useState(0);

  const handleSaveEvaluation = () => {
    console.log("Salvando avaliação");
    // Lógica para salvar a avaliação

    // Chama a função para passar para o próximo jogo
    onNextClick();
  };

  return (
    <div className={styles.gameCard}>
      <Category category={category} />
      <div className={styles.infoplay}>
        <h1>Jogo de {playTypeName} - {modality}</h1>
      </div>
      <div className={styles.notes}>
        <NotePlayer
          apelido={competitor1}
          nota={noteCompetitor1}
          setNota={setNoteCompetitor1}
        />

        <div className={styles.noteplayer} >
          <label style={{
            fontSize: '15px',
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
          apelido={competitor2}
          nota={noteCompetitor2}
          setNota={setNoteCompetitor2}
        />
      </div>
      <div className={styles.divButton}>
        <Button onClick={handleSaveEvaluation}>
          Salvar Avaliação
        </Button>
      </div>
    </div>
  );
}

function Form({ category, modality, playType, matches, competitorsMap }) {
  const matchKeys = Object.keys(matches);
  const [currentGameIndex, setCurrentGameIndex] = useState(0);

  const handleNextForm = () => {
    if (currentGameIndex < matchKeys.length - 1) {
      console.log("Avançando para o próximo jogo");
      setCurrentGameIndex(currentGameIndex + 1);
    }
  };

  return (
    <section className={styles.evaluationContainer}>
      {currentGameIndex < matchKeys.length && (
        <CardEvaluation
          category={category}
          modality={modality}
          playType={playType}
          match={matches[matchKeys[currentGameIndex]]}
          competitorsMap={competitorsMap}
          onNextClick={handleNextForm}
        />
      )}
      {currentGameIndex < matchKeys.length && (
        <p>Jogo Atual: {currentGameIndex + 1}</p>
      )}
    </section>
  );
}

export default Form;
