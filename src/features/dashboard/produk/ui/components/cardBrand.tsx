import { Card, Col } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { useRouter } from 'next/router'
import React from 'react'

interface props {
    imgURL: string
    url:string
}

const CardBrand = (props: props) => {
  const {imgURL, url } = props
  const router = useRouter()
  const handleClick = () => {
    console.log("Test Produk Brand")
    router.push(url)
  }
  return (
    <Col className='gutter-row' span={8}>
        <Card 
            onClick={handleClick}
            hoverable
            cover={
                <img 
                    alt='example'
                    height={275}
                    style={{objectFit: 'cover'}}
                    src={imgURL}
                />
            }
        >
            <Meta title="Nama brand" description="Hallo ini brand"/>
        </Card>
    </Col>
  )
}

export default CardBrand