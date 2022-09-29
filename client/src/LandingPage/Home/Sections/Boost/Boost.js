import React from 'react'
import ReusableButton from '../../../../ReusableComponents/Button/button'
import { BoostContainer, ColumnContainer } from './boost-elements'

const Boost = () => {
    return (
        <BoostContainer>
            <ColumnContainer>
                <h1>Boost your links today</h1>
                <br />
                <ReusableButton name="Get Started" radius="30px" width="fit-content" />
            </ColumnContainer>
        </BoostContainer>
    )
}

export default Boost