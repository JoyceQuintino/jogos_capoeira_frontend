import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Form from '../../components/Form';
import { useLocation } from 'react-router-dom';
import styles from './Evaluation.module.css';

const playTypesName = {
    benguela: 'Benguela',
    sao_bento_grande: 'São Bento Grande',
    siriuna: 'Siriuna'
}

const categoriesName = {
    "laranja-laranja-azul": "Laranja - Laranja Azul",
    "azul-azul-verde": "Azul - Azul Verde",
    "verde-verde-roxa": "Verde - Verde Roxa",
    "roxa-roxa-marrom": "Roxa - Roxa Marrom",
    "marrom-marrom-vermelha": "Marrom - Marrom Vermelha"
}

function Evaluation() {
    const location = useLocation();
    const playType = location.state?.playType;
    const matches = location.state?.matches;
    const category = location.state?.category;
    const modality = location.state?.modality;
    const competitorsCategoria = location.state?.competidores_categoria;

    console.log('PlayType:', playType);
    console.log('Category:', category);
    console.log('Modality:', modality);
    console.log('Matches:', matches);
    console.log('Competidores por categoria:', competitorsCategoria);

    // Verifique se a lista de competidores_categoria existe antes de prosseguir
    if (!competitorsCategoria) {
        return <p>Carregando jogos...</p>;
    }

    // Crie um mapa associando IDs de competidores aos objetos competidores_categoria
    const competitorsMap = Object.fromEntries(
        competitorsCategoria.map(competitor => [competitor.id, competitor])
    );

    return (

        <section className={styles.card_list}>
            {matches && Object.values(matches).map((match) => (
                <Form
                    key={match.id}
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
    )
}


export default Evaluation;
