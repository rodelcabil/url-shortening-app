import styled from 'styled-components';


export const NavbarContainer = styled.nav`

    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    height: auto;
    width: 100%;
    padding: 0 60px;
    z-index: 1000;
    background-color: #fff;
     @media screen and (max-width: 600px){
          padding: 20px;
    }
    
`

export const RowContainer = styled.nav`

    display: flex;
    align-items: center;
    width: 1500px;
    padding-top: 30px;
    margin: auto;
    justify-content: space-between;

     @media screen and (max-width: 600px){
          padding: 0;
    }

    
`

export const RowContainerContent = styled.nav`
    display: flex;
    align-items: center;
  
`

export const LogoContainer = styled.nav`

    display: flex;
    align-items: center;
   
`

export const MenuContainer = styled.nav`

    display: flex;
    align-items: center;
   

    @media screen and (max-width: 800px){
         display: none;
    }

`

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-left: 20px;
`

export const MenuItem = styled.li`
 
    display: inline-block;
    text-align: center;
    padding: 0px 10px;
    font-size: 18px;
    font-weight: 700;
    color: hsl(0, 0%, 75%);
    cursor: pointer;

    &:hover{
        color: #000;
    }
`

export const LoginContainer = styled.nav`

    display: flex;
    align-items: center;
    
    span{
        display: inline-block;
        text-align: center;
        padding: 0px 30px;
        font-size: 18px;
        font-weight: 700;
        color: hsl(0, 0%, 75%);
        cursor: pointer;

        &:hover{
            color: #000;
        }
    }

 @media screen and (max-width: 800px){
         display: none;
    }

`

export const MenuContainerMobile = styled.nav`

    display: none;
   
    .nav-icon{
        color: hsl(0, 0%, 75%);
        cursor: pointer;

        &:hover{
            color: #000;
        }
    }

    @media screen and (max-width: 800px){
         display: flex;
    }

`
export const MenuMobileContent = styled.div`

     display: none;

    .loginContainerMobile{
        border-top: thin solid #555;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    @media screen and (max-width: 800px){
        display: flex;
        position: absolute;
        top: ${({ isClicked }) => (isClicked ? '0' : '-100%')};
        left: 0;
        right: 0;
        flex-direction: column;
        height: auto;
        margin: 80px auto;
        width: 90%;
        border-radius: 20px;
        background: hsl(257, 27%, 26%);
        padding: 30px 20px;
        transition: all 0.5s ease;
    }


`
export const MenuItemMobile = styled.li`
    display: block;
    text-align: center;
    padding: 20px 0px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;

   
`