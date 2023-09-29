import styled from 'styled-components';

export const Form = styled.form`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
`;

export const Label = styled.label`
    position: relative;
    margin: 0 auto;
`;

export const Input = styled.input`
    padding: 10px 20px;
    background-color: #f1dcc9;
    color: #000;
    border: none;
    border-radius: 30px;
    width: 400px;
    font-size: 16px;
    outline: none;
    

    transition: all 300ms linear;

    :hover:active {
        scale: 1.2;
    }
`;

export const Button = styled.button`
    position: absolute;
    top: 50%;
    right: 0;
    border: none;
    background-color: transparent;

    padding: 6px;

    transform: translateX(-50%) translateY(-40%);

    transition: scale 300ms linear;

    cursor: pointer;

    :hover{

        transition: scale 300ms linear;
        scale: 1.2;
    }
`;