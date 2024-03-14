import { Outlet, useLocation } from "react-router-dom"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

function BasePage() {
    const location = useLocation();
    const username = location.state?.username;
    return (
        <main>
            <Header user={username}/>
            <Container>
                <Outlet/>
            </Container>
            <Footer/>
        </main>
    )
}

export default BasePage