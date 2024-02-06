import { useEffect, useState } from 'react'
import SingleProduct from '../SingleProduct/SingleProduct'
import './ProductList.css'
import axios from 'axios'
export default function ProductList() {
  const [products , setProducts] = useState([]);
  async function getDataFromApi() {
    const {data} = await axios.get('https://api.pujakaitem.com/api/products');
    setProducts(data);
  }
  useEffect(()=>{
    getDataFromApi();
  } , []);
  return (
    <>
    {!products.length ? <h2 className='text-center p-3 my-3 text-danger'> Loading ...</h2> : products.map((product)=>{
        return <SingleProduct key={product.id} product={product}/>
    })}
   </>
  );
}
