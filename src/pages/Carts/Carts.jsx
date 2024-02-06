import { useContext } from 'react'
import './Carts.css'
import { CartContext } from '../../Store/CartContext/CartContext'
import PageTitle from '../../Components/Layout/PageTitle/PageTitle';
import Swal from 'sweetalert2'

export default function Carts() {
  const cart = useContext(CartContext);
  const deleteItem = (id) => {
    const newItems = cart.cartItems.filter((item)=>item.id != id);
    cart.setCartItems([...newItems]);
    Swal.fire('Product Deleted Successfully');
    cart.setCount(cart.count - 1);
  }
  return (
    <>
    <div className='container carts__section'>
      <div className='row'>
        <div className='col-md-12'>
          <PageTitle title='Cart Page'/>
          {cart.cartItems.length ? 
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Categoty</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {cart.cartItems.map((item)=> {
                return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td>{item.qty}</td>
                  <td>${(item.price)*(item.qty)}</td>
                  <td>
                    <button onClick={()=>deleteItem(item.id)} className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
                );
              })}
            </tbody>
          </table>
          :
          <h2 className='text-center p-3 my-3 text-danger'>Cart Is Empty</h2>
         }
        </div>
      </div>
    </div>
    </>
  )
}
