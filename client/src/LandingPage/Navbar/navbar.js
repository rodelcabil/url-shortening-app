import React, { useState } from 'react'
import { NavbarContainer, RowContainer, RowContainerContent, LogoContainer, MenuContainer, Menu, MenuItem, MenuContainerMobile, LoginContainer, MenuMobileContent, MenuItemMobile } from './navbar-elements'
import Logo from '../../images/logo.svg'
import ReusableButton from '../../ReusableComponents/Button/button'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

    const [isClicked,setIsClicked] = useState(false);

    const clickFunction = () =>{
        setIsClicked(!isClicked)
    }

    return (
        <>
        <NavbarContainer>
            <RowContainer>
                <RowContainerContent>
                    <LogoContainer>
                        <img src={Logo} alt="Logo" />
                    </LogoContainer>
                    <MenuContainer>
                        <Menu>
                            <MenuItem>Features</MenuItem>
                            <MenuItem>Pricing</MenuItem>
                            <MenuItem>Resources</MenuItem>
                        </Menu>
                    </MenuContainer>
                  
                </RowContainerContent>
                <RowContainerContent>
                    <LoginContainer>
                        <span>Login</span>
                        <ReusableButton name="Sign Up" radius="30px" />
                    </LoginContainer>
                    <MenuContainerMobile>
                            <GiHamburgerMenu size="30" className='nav-icon' onClick={clickFunction}/>
                        
                    </MenuContainerMobile>
                </RowContainerContent>
            </RowContainer>
        </NavbarContainer>
        
        
        <MenuMobileContent isClicked={isClicked}>
            <MenuItemMobile>Features</MenuItemMobile>
            <MenuItemMobile>Pricing</MenuItemMobile>
            <MenuItemMobile>Pricing</MenuItemMobile>
            <div className='loginContainerMobile'>
                    <MenuItemMobile>Login</MenuItemMobile>
                    <ReusableButton name="Sign Up" radius="30px" width="100%"/>
            </div>
        </MenuMobileContent>
        </>
    )
}

export default Navbar