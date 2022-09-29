import React from 'react'
import Card from '../../../../ReusableComponents/Card/Card'
import { StatisticsContainer, RowContainer, Divider } from './statistics-elements'

import BrandRecognition from '../../../../images/icon-brand-recognition.svg'
import DetailedRecords from '../../../../images/icon-detailed-records.svg'
import FullyCustomizable from '../../../../images/icon-fully-customizable.svg'

const Statistics = () => {
  return (
    <StatisticsContainer>
    
        <div className="header-container">
            <h4>Advance Statistics</h4>
            <br/>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <RowContainer>
              <Card icon={BrandRecognition} title="Brand Recognition" marginTop="0" description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content." />
              <Divider />
              <Card icon={DetailedRecords} title="Detailed Records" marginTop="40px" description="Gain insights into which is clicking your links. Knowing when and where people engage with your content helps inform better decisions." />
              <Divider />
              <Card icon={FullyCustomizable} title="Fully Customizable" marginTop="80px" description="Improve awareness brand and content discoverability through customizable links, superchanging audience engagement." />
        </RowContainer>
    </StatisticsContainer>
  )
}

export default Statistics