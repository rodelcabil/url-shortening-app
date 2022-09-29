import React, { useState } from 'react'
import { CopyButtonContainer } from './copy-button-elements'

const ReusableCopyButton = ({link}) => {

    const [isCopied, setCopied] = useState(false);
    
    const copyURL = () =>{
        navigator.clipboard.writeText(link);
        setCopied(true);
    }

    return (
        <CopyButtonContainer isCopied={isCopied} onClick={copyURL}>{isCopied ? 'Copied!' : 'Copy'}</CopyButtonContainer>
    )
}

export default ReusableCopyButton