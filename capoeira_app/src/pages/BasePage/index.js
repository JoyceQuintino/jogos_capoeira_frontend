import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useUser } from '../../context';

function BasePage() {
    const { user } = useUser();

    return (
        <main>
            <Header user={user && user.username}/>
            <Container>
                <Outlet/>
            </Container>
            <Footer/>
        </main>
    )
}

export default BasePage;
