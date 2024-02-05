import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from '../../components/Category';
import Card from '../../components/Card';
import styles from './Modality.module.css';

const allValidCategories = [
    "laranja-laranja-azul",
    "azul-azul-verde",
    "verde-verde-roxa",
    "roxa-roxa-marrom",
    "marrom-marrom-vermelha"
];

function Modality() {

    const [selectedCategories, setSelectedCategories] = useState(allValidCategories);
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

                return (
                    <Category key={categoryData.category} category={data.categoria}>
                        <section className={styles.card_list}>
                            {data.chaves_fem && Object.keys(data.chaves_fem).length > 0 && (
                                <Card modality={data.chaves_fem.genero} category={data.categoria} playType={data.chaves_fem}/>
                            )}
                            {data.chaves_masc && Object.keys(data.chaves_masc).length > 0 && (
                                <Card modality={data.chaves_masc.genero} category={data.categoria} playType={data.chaves_masc}/>
                            )}
                        </section>
                    </Category>
                );
            })}
        </section>
    );
}

export default Modality;
