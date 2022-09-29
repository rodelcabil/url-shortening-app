import styled from 'styled-components';
import bgDesktop from '../../../../images/bg-shorten-desktop.svg'
import bgMobile from '../../../../images/bg-shorten-mobile.svg'

export const LinkContainer = styled.div`
    padding: 60px;
    position: absolute;
    width: 100%;
    margin-top: -110px;
    z-index: 100;

   

    @media screen and (max-width: 600px) {
          margin-top: -140px;
    }
    
`
export const RowContainer = styled.div`
    display: flex;
    max-width: 1500px;
    margin: auto;
    padding: 40px 50px;
    border-radius: 15px;
    background-image: url(${bgDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: hsl(257, 27%, 26%);
    justify-content: space-between;

    .formContainer{
        display: flex;
        align-items: flex-start; 
        justify-content: space-between;
        width: 100%;

        .inputWrapper{
            display: block;
            width: 85%;
            position: relative;
            margin-right: 20px;
            .errorMessage{
                color: #ff704d;
                width: 100%;
                position: absolute;
                margin-top: 10px;

                @media screen and (max-width: 600px) {
                   position: relative;
                   margin-top: 0;
                   margin-bottom: 15px;
                }
            }

            @media screen and (max-width: 600px) {
                 width: 100%;
            }
        }
        
        .button{
            @media screen and (max-width: 600px) {
               width: 100%;
            }
        }
         @media screen and (max-width: 600px) {
            flex-direction: column;
        }

        
    }

   

    input{
        
        width: 100%;
        margin-right: 20px;
        border-radius: 10px;
        border: none;
        padding: 15px 30px;
        font-size: 18px;

        &:focus{
            outline: none;
        }

        @media screen and (max-width: 600px) {
            margin-bottom: 10px;
            width: 100%;
        }
    }
    

     @media screen and (max-width: 600px) {
        flex-direction: column;
        background-image: url(${bgMobile});
        padding: 20px;
    }
`

export const OutputContainer = styled.div`  
    display: flex;
    max-width: 1500px;
    margin: auto;
    padding: 20px;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-radius: 15px;
    font-size: 18px;
    font-weight: 700;
    
    .left-content{
        display: flex;
        align-items: center;

        @media screen and (max-width: 600px) {
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            padding: 20px;
            border-bottom: 1px solid gray;
        }
    }

    .right-content{
        display: flex;
        align-items: center;
        
        p{
            margin-right: 20px;
            color: hsl(180, 66%, 49%);
            padding: 10px 0;
        }

        @media screen and (max-width: 600px) {
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            padding: 20px;
        }
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        padding: 0;
    }
`