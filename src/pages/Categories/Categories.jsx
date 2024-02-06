import './Categories.css'
import PageTitle from '../../Components/Layout/PageTitle/PageTitle'
import {Link} from 'react-router-dom'
export default function Categories() {
  return (
    <>
    <div className='category__section mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mt-5'>
            <PageTitle title='Categories Page'/>
          </div>
        </div>
        
        <div className='row g-3 mt-4'>
        <div className="col-lg-3 col-md-6 col-sm-12 category">
              <div className="card h-100">
                <div className="card__image">
                  <img src="src/assets/Images/mob.jpg" alt="" />
                </div>
                <div style={{backgroundColor: "#eee"}} className="card__details text-center py-2">
                <Link to={'/Mobiles'} className="fw-bold my-auto text-black text-decoration-none fs-5 lin">Mobiles</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 category">
              <div className="card h-100 rounded">
                <div className="card__image">
                <img src="src/assets/Images/laptopCat3.jpg" alt="" /> 

                </div>
                <div style={{backgroundColor: "#eee"}} className="card__details text-center py-2">
                <Link to={'/Laptops'} className="fw-bold my-auto text-black text-decoration-none fs-5 lin">Laptops</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 category rounded">
              <div className="card h-100 rounded">
                <div className="card__image">
                <img src="src/assets/Images/watchCat1.jpg" alt="" />
                </div>

                <div style={{backgroundColor: "#eee"}} className="card__details text-center py-2">
                <Link to={'/Watches'} className="fw-bold my-auto text-black text-decoration-none fs-5 lin">Watches</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 category rounded">
              <div className="card h-100">
                <div className="card__image">
                <img src="src/assets/Images/access1.jpg" alt="" />
                </div>

                <div style={{backgroundColor: "#eee"}} className="card__details text-center py-2">
                    <Link to={'/Accessories'} className="fw-bold my-auto text-black text-decoration-none fs-5 lin">Accessories</Link>
                  </div>
              </div>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}
