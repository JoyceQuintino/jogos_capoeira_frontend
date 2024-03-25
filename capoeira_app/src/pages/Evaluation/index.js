import React, { useState } from 'react';
import Form from '../../components/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Evaluation.module.css';

function Evaluation() {
    const navigate = useNavigate();
    const location = useLocation();
    const playType = location.state?.playType;
    const matches = location.state?.matches;
    const category = location.state?.category;
    const modality = location.state?.modality;
    const competidoresCategoria = location.state?.competidores_categoria;
    const user_id = location.state?.user_id;

    const [currentGameIndex, setCurrentGameIndex] = useState(0);

    if (!competidoresCategoria) {
        return <p>Carregando jogos...</p>;
    }

    const competidorsMap = Object.fromEntries(
        competidoresCategoria.map(competidor => [competidor.id, competidor])
    );

    const handleNextGame = () => {
        if (currentGameIndex < Object.values(matches).length - 1) {
            setCurrentGameIndex(currentGameIndex + 1);
        } else {
            navigate('/modality', { state: { user_id } });
        }
    };

    return (
        <section className={styles.card_list}>
            {Object.values(matches).length > 0 ? (
                <Form
                    key={Object.keys(matches)[currentGameIndex]}
                    user_id={user_id}
                    category={category}
                    modality={modality}
                    playType={playType}
                    matches={[Object.values(matches)[currentGameIndex]]}
                    competidorsMap={competidorsMap}
                    onNextClick={handleNextGame}
                    matchNow={currentGameIndex}
                />
            ) : (
                <p>Sem partidas disponíveis</p>
            )}
        </section>
    );
}

export default Evaluation;

