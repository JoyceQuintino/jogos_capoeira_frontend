import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Login from "../Login";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Login />
        {/* 
          <div className={styles.container}>
              <div className={styles.divimage}>
                  <Banner />
              </div>
          </div>
        */}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
