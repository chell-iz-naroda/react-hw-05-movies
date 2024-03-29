import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Notificaton } from "./NotFound/NptFound.styled";


const AppLayout = lazy(() => import('./AppLayout/AppLayout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));



export const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movies/:movieId" element={<MovieDetails/>}>
                        <Route path="cast" element={<Cast/>} />
                        <Route path="reviews" element={<Reviews/>} />
                    </Route>
                    <Route path="*" element={<Notificaton/>}/>
                </Route>
            </Routes>
        </>
    );
}