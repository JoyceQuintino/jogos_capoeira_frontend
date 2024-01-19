import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewPlay from "./pages/NewPlay";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/newplay" element={<NewPlay />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;