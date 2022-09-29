import styled from 'styled-components';

export const HeroContainer = styled.div`
    padding: 150px 60px;
    margin-top: 90px;

    @media screen and (max-width: 600px) {
          padding: 20px;
    }
`

export const RowContainer = styled.div`
    max-width: 1500px;
    display: flex;
    margin: auto;
    justify-content: space-between;

    @media screen and (max-width: 1350px) {
        flex-direction: column-reverse;
       
    }
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    .header{
        font-size: 90px;
        font-weight: 900;
        color: hsl(260, 8%, 14%);
        margin: 0;
        padding: 0;
        line-height: 1;

        @media screen and (max-width: 1350px) {
           font-size: 40px;
           text-align: center;
        }
    }

    .description {
        font-weight: 500;
        font-size: 25px;
        color: hsl(0, 0%, 75%);

        @media screen and (max-width: 1350px) {
           font-size: 18px;
           text-align: center;
        }
     }
     
     @media screen and (max-width: 1350px) {
          align-items: center;
          padding-bottom: 140px;
        }
    
`
export const RightContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    
    img {
        height: 400px;

        @media (min-width: 801px) and (max-width: 1350px) {
          
           width: 600px ;
           height: 500px;
           margin-bottom: 20px;
        }

        @media screen and (max-width: 800px) {
          
           width: 100%;
           height: 100%;
           margin-bottom: 20px;
        }
    }

    @media screen and (max-width: 1350px) {
          
           justify-content: center;
        }
`