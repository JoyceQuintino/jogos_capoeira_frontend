import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewPlay from "./pages/NewPlay";
import Login from "./pages/Login";
import Initial from "./pages/Initial";
import Page404 from "./pages/Page404";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/initial" element={<Initial />}></Route>
                <Route path="/newplay" element={<NewPlay />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="*" element={<Page404 />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;