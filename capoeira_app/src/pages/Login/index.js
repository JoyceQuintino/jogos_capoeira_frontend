import React, { useState } from 'react';
import styles from './Login.module.css';
import Banner from '../../components/Banner';

function Login() {
    const [credentials, setCredentials] = useState({ username:'', password:'' });

    return (
      <>
        <div className={styles.container}>
            <div className={styles.divcontainer}>
                <Banner />
            </div>
            <div className={styles.divlogin}>
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
      </>
    );
  }
  
  export default Login;