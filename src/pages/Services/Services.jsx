import './Services.css'
import PageTitle from '../../Components/Layout/PageTitle/PageTitle'
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlinePayments } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoIosTime } from "react-icons/io";

export default function Services() {
  return (
    <>
    <div className='services__section mt-5'>
        <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-12 mt-5'>
            <PageTitle title='Services Page'/>
          </div>
          {/* <div className='row g-3 mt-5'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='boxService border p-5 shadow'>
                    <div className='boxService__title text-center'>
                        <h3>Delivery</h3>
                    </div>
                    <div className='boxService__icon text-center fs-3'>
                    <TbTruckDelivery/>
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='boxService border p-5 shadow'>
                    <div className='boxService__title text-center'>
                        <h3>Offers</h3>
                    </div>
                    <div className='boxService__icon text-center fs-3'>
                    <BiSolidOffer />
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='boxService border p-5 shadow'>
                    <div className='boxService__title text-center'>
                        <h3>Visa Payment</h3>
                    </div>
                    <div className='boxService__icon text-center fs-3'>
                    <MdOutlinePayments />
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='boxService border p-5 shadow'>
                    <div className='boxService__title text-center'>
                        <h3>Products</h3>
                    </div>
                    <div className='boxService__icon text-center fs-3'>
                    <MdOutlineProductionQuantityLimits />
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='boxService border p-5 shadow'>
                    <div className='boxService__title text-center'>
                        <h3>Calling</h3>
                    </div>
                    <div className='boxService__icon text-center fs-3'>
                    <IoMdCall />
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='boxService border p-5 shadow'>
                    <div className='boxService__title text-center'>
                        <h3>Wifi</h3>
                    </div>
                    <div className='boxService__icon text-center fs-3'>
                    <FaWifi />
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='boxService border p-5 shadow'>
                    <div className='boxService__title text-center'>
                        <h3>Security</h3>
                    </div>
                    <div className='boxService__icon text-center fs-3'>
                    <MdOutlinePrivacyTip />
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='boxService border p-5 shadow'>
                    <div className='boxService__title text-center'>
                        <h3>Searching</h3>
                    </div>
                    <div className='boxService__icon text-center fs-3'>
                        <FaSearch/>
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='boxService border p-5 shadow'>
                    <div className='boxService__title text-center'>
                        <h3>Confidentiality</h3>
                    </div>
                    <div className='boxService__icon text-center fs-3'>
                    <MdSystemSecurityUpdateGood />
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='boxService border p-5 shadow'>
                    <div className='boxService__title text-center'>
                        <h3>Communication</h3>
                    </div>
                    <div className='boxService__icon text-center fs-3'>
                    <FaMessage />
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='boxService border p-5 shadow'>
                    <div className='boxService__title text-center'>
                        <h3>Good Prices</h3>
                    </div>
                    <div className='boxService__icon text-center fs-3'>
                    <MdOutlinePriceChange />
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
                <div className='boxService border p-5 shadow'>
                    <div className='boxService__title text-center'>
                        <h3>Save Time</h3>
                    </div>
                    <div className='boxService__icon text-center fs-3'>
                    <IoIosTime />
                    </div>
                </div>
            </div>     
          </div> */}
    <section>
    <div className="row">
        <h2 className="section-heading fs-1">Our Services</h2>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
            <TbTruckDelivery/>
            </div>
            <h3>Delivery</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
            <BiSolidOffer />
            </div>
            <h3>Offers</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
            <MdOutlinePayments />
            </div>
            <h3>Visa Payment</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
            <MdOutlinePrivacyTip />
            </div>
            <h3>Security</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
            <IoMdCall />
            </div>
            <h3>Calling</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
            <IoIosTime />
            </div>
            <h3>Save Time</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div> 
      </div> 
    </section>
      
      </div>
      </div>
      </div>
    </>
  )
}
