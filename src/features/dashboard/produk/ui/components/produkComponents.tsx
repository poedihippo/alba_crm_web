import React from 'react'
import Banner from './banner'
import NewArrival from './newArrival'
import Search from './search'

interface props {
    produk: any
}


const ProdukComponent = (props:props) => {
  const {produk} = props
  return produk === "produk" ? (
    <div>
        <Banner />
        <Search />
        <NewArrival />
    </div>
  ) : null
}

export default ProdukComponent