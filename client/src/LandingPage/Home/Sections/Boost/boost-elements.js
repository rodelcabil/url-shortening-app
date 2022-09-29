import styled from 'styled-components';

import bgDesktop from '../../../../images/bg-boost-desktop.svg'
import bgMobile from '../../../../images/bg-boost-mobile.svg'

export const BoostContainer = styled.div`
    padding: 60px;
    background-image: url(${bgDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: hsl(257, 27%, 26%);
    width: 100%;

    @media screen and (max-width: 600px) {
        padding: 120px 20px;
        background-image: url(${bgMobile});
    }
`

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;

    h1{
        color: #fff;
        font-weight: 700;
        text-align: center;
    }
    
`