import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

import { fetchDetailsMovie } from 'service/api';

import noFoundImg from '../../img/image-not-found.png';

import {
    Container,
    ImgPoster,
    Details,
    Title,
    Subtitle,
    Text,
    Span,
    Votes,
    StyledLink,
    Wrapper,
    BackLink
} from './MovieDetails.styled';

import { Error } from 'service/notifications';

export const MovieDetails = () => {
    const [movie, setMovie] = useState();
    const { movieId } = useParams();
    const location = useLocation();

    const backLinkHref =  location?.state?.from ?? location?.state ?? "/";


    useEffect(() => {

        async function getMovieById() {
            try {
                const data = await fetchDetailsMovie(movieId);
                setMovie(data);

            }
            catch (error) {
                console.log(error);
                Error();
            }

        }
        getMovieById();
    }, [movieId]);

    if (!movie) {
        return;
    }

    const { title, poster_path, vote_average, release_date, overview, genres } =
        movie;

    const imgSrc = poster_path
        ? `https://image.tmdb.org/t/p/w300/${poster_path}`
        : noFoundImg;

    const vote = vote_average ? Number(vote_average).toFixed(2) : 'not available';

    return (
        <>
            <Container>
                <BackLink to={backLinkHref}>&#8656; Back</BackLink>
                <Wrapper>
                    <ImgPoster src={imgSrc} width="300" />
                    <Details>
                        <Title>{title}</Title>
                        <Subtitle>
                            Released: <Span>{release_date}</Span>
                        </Subtitle>
                        <Subtitle>
                            Average vote: <Votes>{vote}</Votes>
                        </Subtitle>
                        <Subtitle>Overview:</Subtitle>
                        <Text>{overview}</Text>
                        <Subtitle>
                            Genres:
                            <Text>
                                {genres
                                    .map(({ name }) => {
                                        return name;
                                    })
                                    .join(', ')}
                            </Text>
                        </Subtitle>
                    </Details>
                </Wrapper>
                <Subtitle>Additional Information</Subtitle>
                <StyledLink to={`/movies/${movieId}/cast`} state={backLinkHref}>
                    &#8594; Cast
                </StyledLink>
                <StyledLink to={`/movies/${movieId}/reviews`} state={backLinkHref}>
                    &#8594; Reviews
                </StyledLink>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </Container>
        </>
    );

}
