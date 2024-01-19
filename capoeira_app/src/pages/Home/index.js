import Card from "../../components/Card";
import Category, { categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header />
      <Container>
        {categories.map((category, categoryIndex) => (
          <Category category={category}>
            {filterCategory(categoryIndex).map((jogo) => (
              <Card id={jogo.id} key={jogo.id} />
            ))}
          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
