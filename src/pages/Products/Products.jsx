import './Products.css'
import ProductList from '../../Components/Product/ProductList/ProductList'
import { useContext } from 'react'
import { CartContext } from '../../Store/CartContext/CartContext'
import PageTitle from '../../Components/Layout/PageTitle/PageTitle';
export default function Products() {
  const cart = useContext(CartContext);
  return (
    <>
    <div className='container product__page'>
      {console.log(cart)} 
      <div className='row'>
        <PageTitle title="Products Page"/>
      <ProductList/>
      </div>
    </div>
    </>
  )
}
