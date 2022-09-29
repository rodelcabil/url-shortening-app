import styled from 'styled-components';

export const CardContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 50px;
    border-radius 10px;
    background-color: #fff;
    max-width: 450px;
    margin-top: ${({marginTop}) => marginTop};
    height: fit-content;

    .imageContainer {
        background: hsl(257, 27%, 26%);
        border-radius: 50%;
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top:0;
        margin-top: -40px;

        img {
            height: 40px;
            width: 40px;
        }
            
    }

    

    h4{
        font-size: 20px;
    }
    p{
        color: hsl(0, 0%, 75%);
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
    }

    @media (min-width: 601px) and (max-width: 1500px) {
        max-width: 400px;
    }
    @media screen and (max-width: 1350px) {
        margin-top: 40px;
        align-items: center;
        width: 100%;
        padding: 20px;
        text-align: center;
    }

`