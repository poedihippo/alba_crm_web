import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'

interface data {
    title:string
}

const CardComponents = (props:data) => {
  return (
    <div>
        <Card 
            hoverable
            style={{width: 240, margin: '0 32px'}}
            cover={<img alt='example' src='https://kisahruang.s3.amazonaws.com/user/vendor/md/melandas%20logo.png'/>}
        >
            <Meta title={<h2>Produk {props.title}</h2>} description="Rp. 20.000.000"/>
        </Card>
    </div>
  )
}

export default CardComponents