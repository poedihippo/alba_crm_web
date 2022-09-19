import { Row } from 'antd'
import React from 'react'
import HeaderPage from 'src/shared/components/HeaderPage'
import CardItem from './cardItem'

const ProdukBrand = () => {
  return (
    <div>
        <HeaderPage
            title='Accessories Dio Living'
        />
        <Row
            gutter={[
            {xs: 8, sm: 16, md: 24, lg: 32},
            {xs: 8, sm: 16, md: 24, lg: 32},
          ]}
        >
            <CardItem 
                imgURL='https://melandas-production.s3.ap-southeast-1.amazonaws.com/4012/630845f35167f_VASE-SULIGAR.jpeg'
            />
            <CardItem 
                imgURL='https://melandas-production.s3.ap-southeast-1.amazonaws.com/4013/630845ff6a467_JAR-STUPA.jpeg'
            />
            <CardItem 
                imgURL='https://melandas-production.s3.ap-southeast-1.amazonaws.com/4012/630845f35167f_VASE-SULIGAR.jpeg'
            />
            <CardItem 
                imgURL='https://melandas-production.s3.ap-southeast-1.amazonaws.com/4012/630845f35167f_VASE-SULIGAR.jpeg'
            />
            <CardItem 
                imgURL='https://melandas-production.s3.ap-southeast-1.amazonaws.com/4012/630845f35167f_VASE-SULIGAR.jpeg'
            />
        </Row>
    </div>
  )
}

export default ProdukBrand