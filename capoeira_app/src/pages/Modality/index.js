import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from '../../components/Category';
import Card from '../../components/Card';
import styles from './Modality.module.css';
import { useLocation } from 'react-router-dom';

const categoriesName = {
    "laranja_laranja_azul":"Laranja - Laranja Azul",
    "azul_azul_verde": "Azul - Azul Verde",
    "verde_verde_roxa": "Verde - Verde Roxa",
    "roxa_roxa_marrom": "Roxa - Roxa Marrom",
    "marrom_marrom_vermelha": "Marrom - Marrom Vermelha"
}

function Modality() {
    const location = useLocation();
    const user_id = location.state?.user_id;

    const [categoriesData, setCategoriesData] = useState([]);
    const COMPETIDORES = 'competidores_categoria';

    useEffect(() => {
        const fetchCategoriesData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/chaveamento/get_all_chaveamento');
                const data = response.data;
                const categoriesData = Object.keys(data).map(category => ({
                    category: category,
                    data: data[category],
                    competidores_categoria: data[COMPETIDORES]
                }));
                setCategoriesData(categoriesData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCategoriesData();
    }, []);

    return (
        <section className={styles.modality}>
            {categoriesData.map((categoryData) => {
                const { category, data, competidores_categoria } = categoryData;
                const categoryName = categoriesName[category] || category;

                console.log("COMPETIDORES - ", competidores_categoria);

               const hasChavesKeys = Object.keys(data).some(key => key.startsWith("chaves") && Object.keys(data[key]).length > 0);

               if (!hasChavesKeys || data.hasOwnProperty('competidores_categoria')) {
                   return null;
               }

               const filteredKeys = Object.keys(data).filter(key => key.startsWith('chaves') && Object.keys(data[key]).length > 0);

                return (
                    <Category key={category} category={categoryName}>
                        <section className={styles.card_list}>
                            {filteredKeys.map((key) => (
                                <Card key={key} user_id={user_id} modality={data[key].genero} category={categoryName} playType={data[key]} competidores_categoria={competidores_categoria}/>
                            ))}
                        </section>
                    </Category>
                );
            })}
        </section>
    );
}

export default Modality;


