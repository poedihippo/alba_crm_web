import React from 'react'
import AllBrand from './allBrand'
import Banner from './banner'
import NewArrival from './newArrival'
import Search from './search'


const ProdukComponent = () => {
  return(
    <div>
        <Banner />
        <Search />
        <NewArrival />
        <AllBrand />
    </div>
  ) 
}

export default ProdukComponent