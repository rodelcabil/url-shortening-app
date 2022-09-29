import React from 'react'
import { ButtonContainer } from './button-elements'

const ReusableButton = ({ name, radius, width, onClick, fullWidth }) => {
  return (
    <ButtonContainer onClick={onClick} radius={radius} width={width} fullWidth={fullWidth}>{name}</ButtonContainer>
  )
}

export default ReusableButton