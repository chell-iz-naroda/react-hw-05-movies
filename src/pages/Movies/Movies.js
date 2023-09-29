import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';


import { fetchSearchMovie } from 'service/api';
import { nanoid } from 'nanoid';

import { SearchBar } from 'components/SearchBar/SearchBar';
import { Loader } from 'components/Loader/Loader';
import { MovieSearchList } from 'components/MovieSearchList/MovieSearchList';

import { Error, ErrorSearch } from 'service/notifications';



const Movie = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("saveQuery") ?? '');

    const onSubmit = (event) => {

        event.preventDefault();

        const newQuery = event.target.elements.query.value;

        if (newQuery === "") {
            return Error();
        }

        setQuery(`${nanoid()}/${newQuery}`);
        setMovies([]);

    }

    const sliceQuery = (query) => {
        return query.split('/')[1];
    }


    useEffect(() => {

        

        if (query === '') return;

        async function getSearchMovie() {

            try {
                setLoading(true);
                const querySlc = sliceQuery(query);
                setSearchParams({saveQuery: query});

                const data = await fetchSearchMovie(querySlc);
                data.results.length > 0 ? setMovies(data.results) :  ErrorSearch();

            }
            catch (error) {
                console.log(error);
                Error();
            }
            finally {
                setLoading(false);
            }

        }

        getSearchMovie();
    }, [query, setSearchParams, searchParams]);

    return (
        <>
            <SearchBar
                onSubmit={onSubmit}
            />
            {loading && movies.length === 0 && <Loader />}
            {movies.length > 0 && <MovieSearchList movies={movies}/>}
            
        </>
    );

}

export default Movie;
