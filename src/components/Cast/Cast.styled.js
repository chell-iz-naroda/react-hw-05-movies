import styled from 'styled-components';

export const ImgPoster = styled.img`
    display: block;
    margin: 0;
    padding: 0;
    border-radius: 30px;

    height: 450px;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    list-style: none;
    margin-top: 20px;
`;

export const Item = styled.li`
    padding: 0;
    margin: 0;
    width: 300px;
    color: #000;
`;

export const Subtitle = styled.p`
    margin: 0;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
`;

export const Text = styled.p`
    margin: 0;
    text-align: center;
`;

export const Span = styled.span`
    color: #9f4636;
    font-weight: bold;
`;

export const Message = styled.p`
    text-align: center;
    font-style: italic;
    color: #9f4636;
`;