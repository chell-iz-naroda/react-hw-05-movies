import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    padding: 32px;
    color: #000;
    font-size: 18px;
    line-height: 1.5;
`;

export const Wrapper = styled.div`
    display: flex;
`;

export const ImgPoster = styled.img`
    border-radius: 30px;
`;

export const Details = styled.div`
    padding-left: 20px;
    width: 500px;
`;

export const Title = styled.h2`
`;

export const Subtitle = styled.h3`
    padding-top:30px;
`;

export const Text = styled.p`
    font-weight: 400;
`;

export const Votes = styled.span`
`;

export const Span = styled.span`
`;

export const BackLink = styled(Link)`
    display: block;
    width: 80px;
    margin-bottom: 16px;
    color: #000;
    text-decoration: none;
    transition: all 200ms linear;

    &:hover {
        color: orange;
    }
`;

export const StyledLink = styled(Link)`
    display: block;
    margin-left: 20px;
    width: 100px;
    font-weight: bold;
    text-decoration: none;
    color: #000;
    transition: all 200ms linear;

    &:hover,
    &.active {
        color: orange;
    }
`;