import { useRouter } from 'next/router'
import React from 'react'
import ProdukComponent from 'src/features/dashboard/produk/ui/components/produkComponents'

const Produk = () => {
  const router = useRouter()
  const {produk}:any = router.query
  return <ProdukComponent produk={produk}/> 
}

export default Produk