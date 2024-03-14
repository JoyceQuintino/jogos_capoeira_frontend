import React, { useState } from 'react';
import styles from './Login.module.css';
import BannerLogin from '../../components/BannerLogin';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [credentials, setCredentials] = useState({ username:'', password:'' });
    const [errors, setErrors] = useState({ username: '', password: '' });
    const navigate = useNavigate()

    const validateLogin = () => {
        let valid = true;
        const newErrors = { username: '', password: '' };

        if (!credentials.username) {
            newErrors.username = 'Campo obrigatório';
            valid = false;
        }

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateLogin()) {
            try {
                await axios.post('http://localhost:8000/user/login', {
                    username: credentials.username,
                    password: credentials.password
                });
                navigate('/initial', { state: { username: credentials.username } })
            } catch (error) {
                console.error(error);
                alert(error.response.data.detail)
            }
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
                                    name='username'
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
                                    type='password'
                                    name='password'
                                    placeholder="Digite sua senha"
                                    className={styles.inputBox}
                                    onChange={handleInputChange}
                                />
                                <span style={{ color: 'red' }}>{errors.password}</span>
                            </div>
                            <br />
                            <div className={styles.inputContainer}>
                                <button className={styles.button}>Entrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;