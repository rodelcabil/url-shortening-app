import React from 'react'
import { FooterContainer, RowContainer } from './footer-elements'
import Logo from '../../images/logo-white.svg'
import Facebook from '../../images/icon-facebook.svg'
import Twitter from '../../images/icon-twitter.svg'
import Pinterest from '../../images/icon-pinterest.svg'
import Instagram from '../../images/icon-instagram.svg'

const Footer = () => {
  return (
   <FooterContainer>
      <RowContainer>
        <div className="logoContainer">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="featuresContainer">
          <p>Features</p>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="resourcesContainer">
          <p>Resources</p>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="companyContainer">
          <p>Company</p>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="socialMediaContainer">
          <img src={Facebook} alt="Facebook"/>
          <img src={Twitter} alt="Twitter" />
          <img src={Pinterest} alt="Pinterest" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </RowContainer>
      <div className='bottomText'>
        <p>Challenged by <a href="https://www.frontendmentor.io/" target="_blank">Frontend Mentor</a>. Coded by <a href="https://rodel-cabil-portfolio.web.app/" target="_blank">Rodel E. Cabil</a>. </p>
      </div>
   </FooterContainer>
  )
}

export default Footer