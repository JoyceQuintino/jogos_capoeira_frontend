import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from '../../components/Category';
import Card from '../../components/Card';
import styles from './Modality.module.css';

const categoriesName = {
    "laranja-laranja-azul":"Laranja - Laranja Azul",
    "azul-azul-verde": "Azul - Azul Verde",
    "verde-verde-roxa": "Verde - Verde Roxa",
    "roxa-roxa-marrom": "Roxa - Roxa Marrom",
    "marrom-marrom-vermelha": "Marrom - Marrom Vermelha"
}

function Modality() {

    const [selectedCategories, setSelectedCategories] = useState(Object.keys(categoriesName));
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        const fetchCategory = async (category) => {
            try {
                const response = await axios.post('http://localhost:8000/chaveamento/categoria', {
                    categoria: category,
                });
                return response.data || {};
            } catch (error) {
                console.error(error);
                return {};
            }
        };

        const fetchCategoriesData = async () => {
            const categoriesData = await Promise.all(
                selectedCategories.map(async (category) => ({
                    category: category,
                    data: await fetchCategory(category),
                }))
            );
            setCategoriesData(categoriesData);
        };

        fetchCategoriesData();
    }, [selectedCategories]);

    // Filtrar categorias que têm dados em competidores_categoria
    const categoriesWithData = categoriesData.filter(categoryData =>
        categoryData.data.competidores_categoria.length > 0
    );

    if (categoriesWithData.length === 0) {
        return null; // Não renderizar nada se não houver dados em nenhuma categoria
    }

    return (
        <section className={styles.modality}>
            {categoriesWithData.map((categoryData) => {
                const { data } = categoryData;
                const categoryName = categoriesName[data.categoria] || data.categoria;

                console.log(categoryName)

                console.log(data.competidores_categoria)

                return (
                    <Category key={categoryData.category} category={categoryName}>
                        <section className={styles.card_list}>
                            {data.chaves_fem && Object.keys(data.chaves_fem).length > 0 && (
                                <Card modality={data.chaves_fem.genero} category={categoryName} playType={data.chaves_fem} competidores_categoria={data.competidores_categoria}/>
                            )}
                            {data.chaves_masc && Object.keys(data.chaves_masc).length > 0 && (
                                <Card modality={data.chaves_masc.genero} category={categoryName} playType={data.chaves_masc} competidores_categoria={data.competidores_categoria}/>
                            )}
                        </section>
                    </Category>
                );
            })}
        </section>
    );
}

export default Modality;
