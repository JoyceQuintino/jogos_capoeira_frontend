import styles from "./Home.module.css";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header />
      <Container>
          <div className={styles.container}>
              <div className={styles.divimage}>
                  <Banner />
              </div>
          </div>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
