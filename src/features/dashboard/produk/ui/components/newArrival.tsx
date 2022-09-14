import { LeftCircleFilled, LeftOutlined, RightCircleFilled, RightOutlined } from '@ant-design/icons'
import { Carousel, PageHeader } from 'antd'
import React from 'react'
import CardComponents from './card'

const NewArrival = () => {
  return (
    <div>
        <PageHeader 
            title="New Arrival"
        />
        <Carousel autoplay style={{background: 'red'}} arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
            <CardComponents title="A"/>
            <CardComponents title="B"/>
            <CardComponents title="C"/>
        </Carousel>
    </div>
  )
}

export default NewArrival