import { Link } from 'react-router-dom'
import './SingleProduct.css'
import { useContext } from 'react';
import { CartContext } from '../../../Store/CartContext/CartContext';
export default function SingleProduct({product}) {
   const cart = useContext(CartContext)

return (
<>
 <div className='col-md-4 my-3'>
   <div className="card">
   <img src={product.image} style={{width: "100%" , height: ""}} className="card-img-top" alt="..."/> 
    <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description.slice(0,99)}</p>
        <p className='card-price'>
        <span className='badge bg-warning'>$ {product.price}</span>
        </p>
        <Link to={`/Products/${product.id}`} className="btn btn-primary mx-auto w-100 d-flex justify-content-center align-items-center border-0">Show Details</Link>
        <br />
        <a onClick={()=>cart.addToCart(product)} href="#" className="btn btn-info text-light mx-auto w-100 d-flex justify-content-center align-items-center border-0">Add To Cart</a>
       </div>
    </div>
 </div>
    </>
)
}
