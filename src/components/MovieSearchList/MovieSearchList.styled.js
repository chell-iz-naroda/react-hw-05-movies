import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;

    margin: 0;
    padding: 0;
    padding-top: 32px;
`;

export const Item = styled.li`
    position: relative;
    list-style: none;
    scale: 1;

    transition: all 300ms linear;

    color: #9f4636;
    text-shadow: none;

    border-radius: 30px;

    &:hover {
        text-shadow: 0 0 10px orange, 0 0 30px orange;
        box-shadow: 0 0 30px #9f4636, 0 0 30px #9f4636;
        scale: 1.05;
    }
`;

export const ImgPoster = styled.img`
    display: block;
    border-radius: 30px;
`;

export const TitlePoster = styled.h2`
    position: absolute;
    bottom: 0;

    text-align: center;
    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 300px;
    min-height: 50px;

    margin: 0 auto;

    padding: 10px;

    line-height: 1.2;

    color: #000;
    text-shadow: inherit;

    border-radius: 30px;
    background: #f1dcc9;
`;