import React, { useState } from 'react';
import styles from './Login.module.css';
import BannerLogin from '../../components/BannerLogin';
import { Link } from 'react-router-dom';

function Login() {
    const [credentials, setCredentials] = useState({ username: '', password:'' });
    const [errors, setErrors] = useState({ username: '', password: '' });

    const validateLogin = () => {
        let valid = true;
        const newErrors = { username: '', password: '' };

        // Validar o campo de username
        if (!credentials.username) {
            newErrors.username = 'Campo obrigatório';
            valid = false;
        }

        // Validar o campo de senha
        if (!credentials.password) {
            newErrors.password = 'Campo obrigatório';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateLogin()) {
            // Lógica para enviar os dados de login (por exemplo, para o servidor)
            console.log('Dados válidos, enviando...');
        } else {
            console.log('Dados inválidos, não enviado.');
        }
    };


    return (
        <>
            <div className={styles.container}>
                <div className={styles.divcontainer}>
                    <BannerLogin />
                </div>
                <div className={styles.divlogin}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.mainContainer}>
                            <div className={styles.titleContainer}>
                                <div>Login</div>
                            </div>
                            <br />
                            <div className={styles.inputContainer}>
                                <input
                                    value={credentials.username}
                                    placeholder="Digite seu usuário"
                                    className={styles.inputBox}
                                    onChange={handleInputChange}
                                />
                                <span style={{ color: 'red' }}>{errors.username}</span>
                            </div>
                            <br />
                            <div className={styles.inputContainer}>
                                <input
                                    value={credentials.password}
                                    placeholder="Digite sua senha"
                                    className={styles.inputBox}
                                    onChange={handleInputChange}
                                />
                                <span style={{ color: 'red' }}>{errors.password}</span>
                            </div>
                            <br />
                            <div className={styles.inputContainer}>
                                <Link to="/initial" className={styles.button} type='submit'>Entrar</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;