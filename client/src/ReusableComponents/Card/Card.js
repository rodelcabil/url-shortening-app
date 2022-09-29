import React from 'react'
import { CardContainer } from './Card-elements'

const Card = ({ icon, title, description, marginTop }) => {
    return (
        <CardContainer marginTop={marginTop}>
            <div className="imageContainer">
                <img src={icon} alt="Icon" />
            </div>
            <br /><br />
            <h4>{title}</h4>
            <br />
            <p>{description}</p>
        </CardContainer>
    )
}

export default Card