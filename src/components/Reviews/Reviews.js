import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchReviewsMovie } from 'service/api';

import { Error } from 'service/notifications';

import {
    List,
    Item,
    Subtitle,
    Text,
    Message,
} from './Reviews.styled';

const Reviews = () => {
    const [reviews, setReviews] = useState();
    const { movieId } = useParams();

    useEffect(() => {

        async function getCastById() {

            try {
                const data = await fetchReviewsMovie(movieId);
                setReviews(data.results);
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
            {!reviews && <Loader />}
            {reviews && !reviews.length > 0 && (
                <Message>Sorry, there are no reviews for this movie...</Message>
            )}
            {reviews && reviews.length > 0 && (
                <List>
                    {reviews.map(({ id, author, content, created_at }) => {
                        const localDate = new Date(created_at).toLocaleString();
                        return (
                            <Item key={id}>
                                <Subtitle>{author}</Subtitle>
                                <Text>{localDate}</Text>
                                <Text>{content}</Text>
                            </Item>
                        );
                    })}
                </List>
            )}
        </>
    );
}

export default Reviews;