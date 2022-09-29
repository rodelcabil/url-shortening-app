import styled from 'styled-components';

export const FooterContainer = styled.footer`
    padding: 60px;
    background: hsl(260, 8%, 14%);

    .bottomText {
        max-width: 1500px;
        margin: auto;

        color: #fff;
        margin-top: 20px;
        text-align: center;
        
        a{
            text-decoration: none;
            color: hsl(180, 66%, 49%);
            
        }
    }

     @media screen and (max-width: 600px){
        padding: 20px;
    }
    
`   
export const RowContainer = styled.div`
    display: flex;
    max-width: 1500px;
    margin: auto;
    justify-content: space-between;  
    flex-wrap: wrap;

    .logoContainer{
        display: flex;

        img{
            margin-bottom: 20px;
            height: 30px;
        }

        @media screen and (max-width: 600px){
            padding: 0;
            justify-content: center;
            align-items: center;
        }
    }

    .featuresContainer, .resourcesContainer, .companyContainer{
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        margin-bottom: 20px;

        p{
            color: #fff;
            font-weight: 700;
            font-size: 18px;
            margin-bottom: 15px;
        }

        ul{
            list-style-type: none;

            li{
                 color: hsl(0, 0%, 75%);
                 font-size: 16px;
                 font-weight: 500;
                 padding: 5px 0;
                 cursor: pointer;

                @media screen and (max-width: 600px){
                   text-align: center;
                }
                 
            }
        }

         @media screen and (max-width: 600px){
            padding: 0;
            justify-content: center;
            align-items: center;
        }
    }

    .socialMediaContainer{
        display: flex;
        img{
            padding: 0 10px;
             height: 25px;
        }

         @media screen and (max-width: 600px){
            padding: 0;
            justify-content: center;
            align-items: center;
        }
    }

    @media screen and (max-width: 600px){
           
        display: block;
        margin: auto;
    }
`