import styled from 'styled-components';

export const StatisticsContainer = styled.div`
    padding: 200px 60px 120px 60px;
    background: #eeeeee;

    .header-container{
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h4{
            font-size: 30px;
            font-weight: 800;
            text-align: center;
        }
        p{
            color: hsl(0, 0%, 75%);
            font-size: 18px;
            font-weight: 700;
            line-height: 1.5;
            max-width: 500px;      
            text-align: center;
            
        }
    }
    
    @media screen and (max-width: 600px) {
            padding: 20px;
            padding-top: 320px;
    }
`

export const RowContainer = styled.div`

    display: flex;
    max-width: 1500px;
    margin: auto;
    padding-top: 120px;
   
    @media screen and (max-width: 1350px) {
            padding: 60px 20px;
            flex-direction: column;
            align-items: center;
            
    }
`

export const Divider = styled.span`

    flex: 1;
    background-color: hsl(180, 66%, 49%);
    height: 10px;
    margin-top: 150px;
   
   
    @media screen and (max-width: 1350px) {
            padding: 30px 0;
            margin-top: 0;
            width: 10px;
    }
            
`