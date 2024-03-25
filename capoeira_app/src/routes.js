import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Modality from "./pages/Modality";
import Login from "./pages/Login";
import Initial from "./pages/Initial";
import Page404 from "./pages/Page404";
import BasePage from "./pages/BasePage";
import Playing from "./pages/Playing";
import Play from "./pages/Play";
import Evaluation from "./pages/Evaluation";
import { UserProvider } from './context';

function AppRoutes() {
    return (
        <BrowserRouter>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<BasePage />}>
                        <Route index element={<Home />}></Route>
                        <Route path="/initial" element={<Initial />}></Route>
                        <Route path="/modality" element={<Modality />}></Route>
                        <Route path="/playing" element={<Playing />}></Route>
                        <Route path="/play" element={<Play />}></Route>
                        <Route path="/evaluation" element={<Evaluation />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="*" element={<Page404 />}></Route>
                    </Route>
                </Routes>
            </UserProvider>
        </BrowserRouter>
    );
}

export default AppRoutes;