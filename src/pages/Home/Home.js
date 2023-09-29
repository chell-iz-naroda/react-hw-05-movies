import { useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Error } from 'service/notifications';
import { Loader } from 'components/Loader/Loader';

import { fetchTrandMovie } from 'service/api';

import { Container, Heading, List, Item, ImgPoster, TitlePoster } from './Home.styled';

import noFoundImg from '../../img/image-not-found.png'


const Home = () => {

    const [movies, setMovies] = useState([]);
    const [page] = useState(1);
    const [loading, setLoading] = useState(false);

    const location = useLocation();

    

    useEffect(() => {

        async function getTrandingMovie() {

            try {
                setLoading(true);

                const data = await fetchTrandMovie(page);

                page === 1 ? setMovies(data.results) : setMovies(movies => [...movies, data.results]);


            }
            catch (error) {
                console.log(error);
                Error();
            }
            finally {
                setLoading(false);
            }
        }

        getTrandingMovie();

    }, [page]);

    return (
        <Container>
            <Heading>Trands Movie of the Day</Heading>
            {loading && <Loader />}
            {movies.length > 0 && (
                <List>
                    {movies.map(({ id, title, poster_path, original_title }) => {
                        const imgSrc = poster_path
                            ? `https://image.tmdb.org/t/p/w300${poster_path}`
                            : noFoundImg;
                        return (
                            <Link key={id} to={`movies/${id}`} state={{ from: location }}>
                                <Item>
                                    <ImgPoster
                                        src={imgSrc}
                                        alt={original_title}
                                        width="300"
                                        height="450"
                                    />
                                    <TitlePoster>{title}</TitlePoster>
                                </Item>
                            </Link>
                        );
                    })}
                </List>
            )
            }
        </Container>
    );

}

export default Home;
