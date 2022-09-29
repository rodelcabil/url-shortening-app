import styled from 'styled-components';


export const CopyButtonContainer = styled.button`

    display: flex;
    height: auto;
    width: fit-content;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    background: hsl(180, 66%, 49%);
    padding: 8px 15px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover{
       background: #80e5e5;
    }

     @media screen and (max-width: 600px) {
        width: 100%;
        margin-top: 10px;
    }
`