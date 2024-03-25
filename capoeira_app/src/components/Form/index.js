import React, { useState } from 'react';
import Category from '../Category';
import NotePlayer from '../NotePlayer';
import styles from './Form.module.css';
import axios from 'axios';

const playTypesName = {
  benguela: 'Benguela',
  sao_bento_grande: 'São Bento Grande',
  siriuna: 'Siriuna',
};

function CardEvaluation({ user_id, category, modality, playType, match, competidorsMap, onNextClick, matchNow }) {
  const playTypeName = playTypesName[playType];
  const competidor1 = competidorsMap[match?.competidor_1]?.apelido || 'Competidor 1';
  const competidor2 = competidorsMap[match?.competidor_2]?.apelido || 'Competidor 2';

  const [notecompetidor1, setNotecompetidor1] = useState(0);
  const [notecompetidor2, setNotecompetidor2] = useState(0);
  const [noteplay, setNotePlay] = useState(0);
  const [resposta, setResposta] = useState('');
  const [showResposta, setShowResposta] = useState(false);

  const handleSaveEvaluation = async () => {
    console.log("Salvando avaliação");
    console.log("LOGIN DO USUÁRIO - ", user_id);
    const data = {
      "pontuacao_competidor_1": notecompetidor1,
      "pontuacao_competidor_2": notecompetidor2,
      "pontuacao_jogo": noteplay,
      "id_jogo": match.id,
      "id_user": user_id
    };

    console.log("Dados da avaliação a serem enviados: ", data);

    try {
      const response = await axios.post('http://127.0.0.1:8000/pontuacao/create_pontuacao', data);

      if (response.status === 200) {
        setResposta("Avaliação salva com sucesso!");
        setShowResposta(true);
        setTimeout(() => {
          setShowResposta(false);
          onNextClick();
        }, 3000);
      } else {
        console.error("Erro ao enviar avaliação: ", response.data);
      }
    } catch (error) {
      setResposta("Erro ao enviar avaliação: " + error.message);
      setShowResposta(true);
      setTimeout(() => {
        setShowResposta(false);
      }, 3000);
      console.error(error);
    }
  };

  return (
    <div className={styles.gameCard}>
      <Category category={category} />
      <div className={styles.infoplay}>
        <h1>Jogo {matchNow+1} de {playTypeName} - {modality}</h1>
      </div>
      <div className={styles.notes}>
        <NotePlayer
          apelido={competidor1}
          nota={notecompetidor1}
          setNota={setNotecompetidor1}
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
          apelido={competidor2}
          nota={notecompetidor2}
          setNota={setNotecompetidor2}
        />
      </div>
      <div className={styles.divButton}>
        <button
          className={styles.button}
          onClick={handleSaveEvaluation}
        >
          Salvar Avaliação
        </button>
      </div>
      {showResposta && (
        <div className={styles.notification}>{resposta}</div>
      )}
    </div>
  );
}

function Form({ user_id, category, modality, playType, matches, competidorsMap, onNextClick, matchNow }) {

  return (
    <section className={styles.evaluationContainer}>
      {matches.map((match, index) => (
        <div key={index}>
          <CardEvaluation
            user_id={user_id}
            category={category}
            modality={modality}
            playType={playType}
            match={match}
            competidorsMap={competidorsMap}
            onNextClick={onNextClick}
            matchNow={matchNow}
          />
        </div>
      ))}
    </section>
  );
}

export default Form;
