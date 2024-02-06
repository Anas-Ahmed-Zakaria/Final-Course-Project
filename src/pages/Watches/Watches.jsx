import './Watches.css'
import PageTitle from "../../Components/Layout/PageTitle/PageTitle";
import { Link } from 'react-router-dom';
export default function Watches() {
  return (
    <>
    <div className="watches__page mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <PageTitle title='Watches Page'/>
                </div>
            </div>

            <div className="row mt-5 g-4">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="watchBox">
                        <div className="watchBox__content">
                            <div className="watchBox__content__image">
                                <img src="src/assets/Images/watch1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="watchBox">
                        <div className="watchBox__content">
                            <div className="watchBox__content__image">
                                <img src="src/assets/Images/watch5.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="watchBox">
                        <div className="watchBox__content">
                            <div className="watchBox__content__image">
                                <img src="src/assets/Images/watch3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="watchBox">
                        <div className="watchBox__content">
                            <div className="watchBox__content__image">
                                <img src="src/assets/Images/watch6.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="watchBox">
                        <div className="watchBox__content">
                            <div className="watchBox__content__image">
                                <img src="src/assets/Images/watch9.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="watchBox">
                        <div className="watchBox__content">
                            <div className="watchBox__content__image">
                                <img src="src/assets/Images/watch4.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="watchBox">
                        <div className="watchBox__content">
                            <div className="watchBox__content__image">
                                <img src="src/assets/Images/watch7.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="watchBox">
                        <div className="watchBox__content">
                            <div className="watchBox__content__image">
                                <img src="src/assets/Images/watch8.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="watchBox">
                        <div className="watchBox__content">
                            <div className="watchBox__content__image">
                                <img src="src/assets/Images/watch.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="watchBox">
                        <div className="watchBox__content">
                            <div className="watchBox__content__image">
                                <img src="src/assets/Images/watch11.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="watchBox">
                        <div className="watchBox__content">
                            <div className="watchBox__content__image">
                                <img src="src/assets/Images/watch14.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="watchBox">
                        <div className="watchBox__content">
                            <div className="watchBox__content__image">
                                <img src="src/assets/Images/watch13.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-2 g-1'>
                <div className='col-md-3'>
                    <div className='back__link mx-auto d-flex justify-content-center'>
                        <Link className='btn btn-primary form-control border-0' to='/Categories'>Back To Categories</Link>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className='go__link mx-auto d-flex justify-content-center'>
                        <Link className='btn btn-primary form-control border-0' to='/Mobiles'>Back To Mobiles Category</Link>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className='go__link mx-auto d-flex justify-content-center'>
                        <Link className='btn btn-primary form-control border-0' to='/Laptops'>Back To Laptops Category</Link>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='go__link mx-auto d-flex justify-content-center'>
                        <Link className='btn btn-info form-control text-white border-0 go' to='/Accessories'>Go To Accessories Category</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

