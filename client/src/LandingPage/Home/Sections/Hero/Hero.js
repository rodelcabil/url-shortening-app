import React from 'react'
import ReusableButton from '../../../../ReusableComponents/Button/button'
import { HeroContainer, RowContainer, LeftContainer, RightContainer } from './hero-elements'
import HeroImage from '../../../../images/illustration-working.svg'
const Hero = () => {
    return (
        <HeroContainer>
            <RowContainer>
                <LeftContainer>
                    <span className="header">
                        More than just shorter links
                    </span>
                    <br />
                    <p className='description'>Build your brand's recognition ang get detailed<br/> insights on how your links are performing.</p>
                    <br/><br/>
                    <ReusableButton name="Get Started" radius="30px" width="fit-content" />
                </LeftContainer>
                <RightContainer>
                    <img src={HeroImage} alt="Hero Image" />
                </RightContainer>
            </RowContainer>
        </HeroContainer>
    )
}

export default Hero