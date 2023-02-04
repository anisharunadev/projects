import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Header from "../components/header/Header";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/> } />
            <Route path="/test" element={<Header/> } />
            <Route path="/movie-details/:imdbId" element={<Home/> } />
        </Routes>
    )
}

export default AppRoutes;