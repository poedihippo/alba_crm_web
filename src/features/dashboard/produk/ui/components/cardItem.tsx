import { Button, Card, Col, Drawer, Select } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface props {
    imgURL: string
}

const { Option } = Select

const CardItem = (props:props) => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [qty, setQty] = useState(1)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const showChildrenDrawer = () => {
    setChildrenDrawer(true)
  }

  const onChildrenClose = () => {
    setChildrenDrawer(false)
  }

  const {imgURL} = props
  return (
    <>
        <Col className='gutter-row' span={6}>
            <Card 
            onClick={showDrawer}
            hoverable 
            cover={
                <img 
                    alt='example'
                    height={400}
                    style={{objectFit: 'cover'}}
                    src={imgURL}
                />
            }
            >
                <Meta title="Suligar" description="Rp. 1.000.000 s/d Rp 2.0000.000" />
            </Card>        
        </Col>
        <Drawer closable={false} width={520} onClose={onClose} open={open}>
            <div style={{margin: '0 28px'}}>
              <Swiper 
                // loop={true}                
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <SwiperSlide>
                    <img 
                        alt='example'
                        height={400}
                        style={{objectFit: 'cover'}}
                        src={imgURL}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img 
                        alt='example'
                        height={400}
                        style={{objectFit: 'cover'}}
                        src={imgURL}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        alt='example'
                        height={400}
                        style={{objectFit: 'cover'}}
                        src={imgURL}
                    />
                </SwiperSlide>
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                // loop={true}
                style={{marginTop: '16px'}}
                spaceBetween={10}
                slidesPerView={2}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                    <img 
                        alt='example'
                        // height={400}
                        // style={{objectFit: 'cover'}}
                        src={imgURL}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        alt='example'
                        // height={400}
                        // style={{objectFit: 'cover'}}
                        src={imgURL}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        alt='example'
                        // height={400}
                        // style={{objectFit: 'cover'}}
                        src={imgURL}
                    />
                </SwiperSlide>
              </Swiper>

              <h2>Suligar</h2>
              <h2>Rp. 740.000 s/d Rp. 740.000</h2>
              <Button block type='primary' onClick={showChildrenDrawer}>Select Option</Button>
              <div style={{display: 'flex', marginTop: '10px'}}>
                 <Button style={{marginRight: '10px'}} block type='primary'>Add To Chart</Button>
                 <Button danger block>Checkout</Button>
              </div>              
            </div>  
            <Drawer closable={false} width={520} onClose={onChildrenClose} open={childrenDrawer} >
                <div style={{margin: '0 20px'}}>
                  <img 
                    alt='example'
                    height={400}
                    style={{objectFit: 'cover'}}
                    src={imgURL}
                  />
                  
                  <h2 style={{marginTop: 24}}>Select Category: </h2>
                  <Select defaultValue="Select Category" style={{ width: "90%"}}>
                    <Option value="A">Orange</Option>
                    <Option value="B">Blue</Option>
                    <Option value="C">Red</Option>
                  </Select>

                  <h2 style={{marginTop: 24}}>Select Covering: </h2>
                  <Select defaultValue="Select Category" style={{ width: "90%"}}>
                    <Option value="A">Orange</Option>
                    <Option value="B">Blue</Option>
                    <Option value="C">Red</Option>
                  </Select>

                  <h2 style={{marginTop: 24}}>Select Color: </h2>
                  <Select defaultValue="Select Category" style={{ width: "90%"}}>
                    <Option value="A">Orange</Option>
                    <Option value="B">Blue</Option>
                    <Option value="C">Red</Option>
                  </Select>

                  <h2 style={{marginTop: 24}}>Total:</h2>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <h2>0</h2>
                    </div>
                    <div style={{display: 'flex', margin: '0 12px'}}>
                        <Button 
                            style={{marginRight: 10}}
                            onClick={() => setQty(qty - 1)} 
                            disabled={qty === 0 ? true : false}
                        >
                            -
                        </Button>
                        <h2 style={{justifyContent: 'center', alignItems:'center', alignContent:'center'}}>{qty}</h2>
                        <Button style={{marginLeft: 10}} onClick={() => setQty(qty + 1)}>+</Button>
                    </div>
                  </div>

                  <Button
                    block
                    type='primary'
                    style={{marginTop: 10}}
                  >
                    Apply
                  </Button>
                </div>
            </Drawer>          
        </Drawer>
    </>
  )
}

export default CardItem