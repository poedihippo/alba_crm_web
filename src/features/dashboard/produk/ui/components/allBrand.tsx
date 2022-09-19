import { PageHeader, Row } from 'antd'
import React from 'react'
import CardBrand from './cardBrand'

const AllBrand = () => {
  return (
    <div>
        <PageHeader 
            title="All Brand"
        />
        <Row
          gutter={[
            {xs: 8, sm: 16, md: 24, lg: 32},
            {xs: 8, sm: 16, md: 24, lg: 32},
          ]}
        >
          <CardBrand
            url='/dashboard/produk/12'
            imgURL='https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
          />
          <CardBrand
            url=''
            imgURL='https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
          />
          <CardBrand
            url=''
            imgURL='https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
          />
          <CardBrand
            url=''
            imgURL='https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
          />
        </Row>
    </div>
  )
}

export default AllBrand