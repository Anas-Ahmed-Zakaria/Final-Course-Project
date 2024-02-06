import './Mobiles.css'
import PageTitle from "../../Components/Layout/PageTitle/PageTitle";
import { Link } from 'react-router-dom';
export default function Mobiles() {
  return (
    <>
    <div className="mobiles__page mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <PageTitle title='Mobiles Page'/>
                </div>
            </div>

            <div className="row mt-5 g-4">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mobileBox">
                        <div className="mobileBox__content">
                            <div className="mobileBox__content__image">
                                <img src="src/assets/Images/mob2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mobileBox">
                        <div className="mobileBox__content">
                            <div className="mobileBox__content__image">
                                <img src="src/assets/Images/mob3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mobileBox">
                        <div className="mobileBox__content">
                            <div className="mobileBox__content__image">
                                <img src="src/assets/Images/mob4.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mobileBox">
                        <div className="mobileBox__content">
                            <div className="mobileBox__content__image">
                                <img src="src/assets/Images/mob5.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mobileBox">
                        <div className="mobileBox__content">
                            <div className="mobileBox__content__image">
                                <img src="src/assets/Images/mob6.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mobileBox">
                        <div className="mobileBox__content">
                            <div className="mobileBox__content__image">
                                <img src="src/assets/Images/mob7.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mobileBox">
                        <div className="mobileBox__content">
                            <div className="mobileBox__content__image">
                                <img src="src/assets/Images/mob8.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mobileBox">
                        <div className="mobileBox__content">
                            <div className="mobileBox__content__image">
                                <img src="src/assets/Images/mob9.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mobileBox">
                        <div className="mobileBox__content">
                            <div className="mobileBox__content__image">
                                <img src="src/assets/Images/mob10.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mobileBox">
                        <div className="mobileBox__content">
                            <div className="mobileBox__content__image">
                                <img src="src/assets/Images/mob11.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mobileBox">
                        <div className="mobileBox__content">
                            <div className="mobileBox__content__image">
                                <img src="src/assets/Images/mob12.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="mobileBox">
                        <div className="mobileBox__content">
                            <div className="mobileBox__content__image">
                                <img src="src/assets/Images/mob13.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-3 g-1'>
                <div className='col-md-6'>
                    <div className='back__link mx-auto d-flex justify-content-center'>
                        <Link className='btn btn-primary form-control text-white border-0' to='/Categories'>Back To Categories</Link>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='go__link mx-auto d-flex justify-content-center'>
                        <Link className='btn btn-info form-control text-white border-0 go' to='/Laptops'>Go To Laptops Category</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
