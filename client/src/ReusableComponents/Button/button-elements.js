import styled from 'styled-components';


export const ButtonContainer = styled.button`

    display: flex;
    height: auto;
    width: ${({ width }) => width};
    align-items: center;
    border-radius: ${({ radius }) => radius};
    justify-content: center;
    background: hsl(180, 66%, 49%);
    padding: 15px 30px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    border: none;
    cursor: pointer;
    min-width: fit-content;

    &:hover{
       background: #80e5e5;
    }

    @media screen and (max-width: 600px) {
        width: ${({ fullWidth, width }) => (fullWidth ? '100%' : width )}
    }
`