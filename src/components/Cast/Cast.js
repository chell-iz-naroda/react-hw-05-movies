import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCreditsMovie } from 'service/api';

import noFoundImg from '../../img/image-not-found.png';

import { Error } from 'service/notifications';

import {
    List,
    Item,
    ImgPoster,
    Subtitle,
    Text,
    Span,
    Message,
} from './Cast.styled';

const Cast = () => {
    const [cast, setCast] = useState();
    const { movieId } = useParams();

    useEffect(() => {

        async function getCastById() {

            try {
                const data = await fetchCreditsMovie(movieId);
                setCast(data.cast);
            }
            catch (error) {
                console.log(error.message !== 'canceled');
                Error();
            }
        }
        getCastById();
    }, [movieId]);

    return (
        <>
            {!cast && <Loader />}
            {cast && !cast.length > 0 && (
                <Message>Sorry, there is no cast available for this movie...</Message>
            )}
            {cast && cast.length > 0 && (
                <List>
                    {cast.map(({ cast_id, name, character, profile_path }) => {
                        const imgSrc = profile_path
                            ? `https://image.tmdb.org/t/p/w300${profile_path}`
                            : noFoundImg;
                        return (
                            <Item key={cast_id}>
                                <ImgPoster src={imgSrc} alt={name} width="300" height="450" />
                                <Subtitle>{name}</Subtitle>
                                <Text>
                                    as <Span>{character}</Span>
                                </Text>
                            </Item>
                        );
                    })}
                </List>
            )}
        </>
    );
}

export default Cast;