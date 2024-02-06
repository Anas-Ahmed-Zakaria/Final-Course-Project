import './Prod.css'
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PageTitle from "../../Components/Layout/PageTitle/PageTitle";
import { CartContext } from "../../Store/CartContext/CartContext";

export default function Prod() {
    const params = useParams()
    const [product , setProduct] = useState(false);
    const cart = useContext(CartContext);
    useEffect(()=>{
        axios.get('https://api.pujakaitem.com/api/products/'+params.productId)
        .then((data)=>{console.log(data.data);
            setProduct(data.data);
        })
    },[]);


  return (
    <>
    <div className="container prod__section">
      <PageTitle title="Cart Title"/>
      <div className="row">
      {product ? (
      <div className='col-md-6 my-5 mx-auto position-absolute' style={{top: "50%" , left: "50%" , transform: 'translate(-50% , -50%)'}}>
        <div className="card">
          <img src={product.image} style={{width: "100%" , height: ""}} className="card-img-top" alt=""/>       
          <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className='card-price'>
          <span className='badge bg-warning'>$ {product.price}</span>
          </p>
          <br />
          <a onClick={()=>cart.addToCart(product)} className="btn btn-info text-light mx-auto w-100 d-flex justify-content-center align-items-center border-0">Add To Cart</a>
          </div>
        </div>
      </div>
    ) : (

    "Not found"
    )}
</div>
</div>
</>
)
}
