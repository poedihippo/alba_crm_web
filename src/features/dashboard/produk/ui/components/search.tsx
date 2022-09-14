import { ShopOutlined, ShoppingOutlined } from '@ant-design/icons'
import { Button, Card, Input } from 'antd'
import React from 'react'

const Search = () => {
  return (
    <div style={{
        justifyContent: 'space-between',
        display: 'flex',    
        margin: '16px 0'
    }}>
        <Input         
         placeholder='Search Product'
        />
        <Button type='primary' icon={<ShopOutlined />} style={{margin: '0 16px'}}> 
            Product Stok
        </Button>
        <Button type='primary' icon={<ShoppingOutlined/>} > 
            Cart
        </Button>
    </div>
  )
}

export default Search