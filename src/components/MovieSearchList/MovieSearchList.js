import { Link, useLocation } from 'react-router-dom';

import { List, Item, ImgPoster, TitlePoster } from "./MovieSearchList.styled";


import noFoundImg from '../../img/image-not-found.png'

export const MovieSearchList = ({movies}) => {
    const location = useLocation();
    return (
        <List>
            {movies.map(({ id, title, poster_path, original_title }) => {
                const imgSrc = poster_path
                    ? `https://image.tmdb.org/t/p/w300${poster_path}`
                    : noFoundImg;
                return (
                    <Link key={id} to={`${id}`} state={{ from: location }}>
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
    );
};
