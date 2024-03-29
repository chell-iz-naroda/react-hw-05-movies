import styled from 'styled-components';


export const List = styled.ul`
    display: block;
    list-style: none;
    margin-top: 20px;
    padding-right: 32px;
`;

export const Item = styled.li`
    padding: 16px;
    margin: 0;
    color: #000;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &:not(:last-of-type) {
        margin-bottom: 32px;
    }
`;

export const Subtitle = styled.p`
    margin: 0;
    font-weight: bold;
    font-size: 18px;
    color: #9f4636;
`;

export const Text = styled.p`
    margin-top: 0;
    font-weight: normal;
    font-size: 16px;
    line-height: 1.2;
`;

export const Message = styled.p`
    text-align: center;
    font-style: italic;
    color: #9f4636;
`;