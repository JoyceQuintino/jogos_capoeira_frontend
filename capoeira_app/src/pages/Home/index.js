import Login from "../Login";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <section className={styles.home}>
        <Login />
      </section>  
    </>
  );
}

export default Home;
