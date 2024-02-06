import { useContext} from 'react';
import './Navbars.css'
import { Link } from "react-router-dom";
import { CartContext } from '../../Store/CartContext/CartContext';
import { NavLink } from 'react-router-dom';

function Navbars() {  
  const cart = useContext(CartContext);
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-primary text-dark fw-bold shadow">
  <div className="container">
    <Link className="navbar-brand" href="#">
      <img src="src/assets/Images/instagram-shop-logo-design_23-2149750724.jpg" alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav gap-4">
        <li className="nav-item my-auto">
          <NavLink  to='/' className={({isActive , isPending}) => isPending? "pending" : isActive? "active" : ""} aria-current="page">Home</NavLink>
        </li>

        
        <li className="nav-item my-auto">
          <NavLink to='/Products' className={({isActive , isPending}) => isPending? "pending" : isActive? "active" : ""}>Products</NavLink>
        </li>


        <li className="nav-item my-auto">
          <NavLink to='/Carts' className={({isActive , isPending}) => isPending? "pending" : isActive? "active" : ""}>Carts <span className='badge bg-warning'>{cart.count}</span></NavLink>
        </li>


        <li className="nav-item my-auto">
          <NavLink to='/Services' className={({isActive , isPending}) => isPending? "pending" : isActive? "active" : ""}>Services</NavLink>
        </li>


        <li className="nav-item my-auto">
          <NavLink to='/Categories' className={({isActive , isPending}) => isPending? "pending" : isActive? "active" : ""}>Categories</NavLink>
        </li>


        <li className="nav-item my-auto">
          <NavLink to='/Customers' className={({isActive , isPending}) => isPending? "pending" : isActive? "active" : ""}>Customers</NavLink>
        </li>
        

        <li className="nav-item my-auto">
          <NavLink to='/About' className={({isActive , isPending}) => isPending? "pending" : isActive? "active" : ""}>About</NavLink>
        </li>


        <li className="nav-item my-auto">
          <NavLink to='/Overview' className={({isActive , isPending}) => isPending? "pending" : isActive? "active" : ""}>Overview</NavLink>
        </li>

        
        <li className="nav-item my-auto">
          <NavLink to='/Contact' className={({isActive , isPending}) => isPending? "pending" : isActive? "active" : ""}>Contact</NavLink>
        </li>


        <li className="nav-item my-auto d-none">
          <NavLink to='/Mobiles' className={({isActive , isPending}) => isPending? "pending" : isActive? "active" : ""}>Mobiles</NavLink>
        </li>


        <li className="nav-item my-auto d-none">
          <NavLink to='/Laptops' className={({isActive , isPending}) => isPending? "pending" : isActive? "active" : ""}>Laptops</NavLink>
        </li>


        <li className="nav-item my-auto d-none">
          <NavLink to='/Watches' className={({isActive , isPending}) => isPending? "pending" : isActive? "active" : ""}>Watches</NavLink>
        </li>


        <li className="nav-item my-auto d-none">
          <NavLink to='/Accessories' className={({isActive , isPending}) => isPending? "pending" : isActive? "active" : ""}>Accessories</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
);
}

export default Navbars;
