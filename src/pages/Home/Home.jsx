import'./Home.css'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Home() {
  {window.addEventListener('load' , ()=> {Swal.fire("Hello, Welcome In Our Store")})}
  return (
        <div className='home__page'>
          <div className='overlay'>
          <div className='container'>
            <div className='home__page__content'>
                <div className='home__page__title'>
                  <div className='home__page__title__head'>
                    <h1 className='text-light fw-bold'>Welcome To Our Website</h1>
                  </div>
                  <div className='home__page__title__desc'>
                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dolorum!</p>
                  </div>
                  <div className='home__page__link'>
                    <Link className='btn btn-danger go__link border-0 rounded-5' to='/Products'>Go To Products</Link>
                  </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    )
}
  

