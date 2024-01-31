import React, { useState } from 'react';
import styles from './Login.module.css';
import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Login() {
    const [credentials, setCredentials] = useState({ username:'', password:'' });

    return (
      <>
        <Header />
        <Container>
            <div className={styles.container}>
                <div className={styles.div1}>
                    <Banner />
                </div>
                <div className={styles.div2}>
                    <div className={styles.mainContainer}>
                        <div className={styles.titleContainer}>
                            <div>Login</div>
                        </div>
                        <br />
                        <div className={styles.inputContainer}>
                            <input
                                value={credentials.username}
                                placeholder="Digite seu usuário"
                                onChange={ev => setCredentials.username(ev.target.value)}
                                className={styles.inputBox}
                            />
                        </div>
                        <br />
                        <div className={styles.inputContainer}>
                            <input
                                value={credentials.password}
                                placeholder="Digite sua senha"
                                onChange={ev => setCredentials.password(ev.target.value)}
                                className={styles.inputBox}
                            />
                        </div>
                        <br />
                        <div className={styles.inputContainer}>
                            <button className={styles.button} type='submit'>Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        <Footer />
      </>
    );
  }
  
  export default Login;