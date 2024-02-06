import './Accessories.css'
import PageTitle from "../../Components/Layout/PageTitle/PageTitle";
import { Link } from 'react-router-dom';
export default function Laptops() {
  return (
    <>
    <div className="accessories__page mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <PageTitle title='Accessories Page'/>
                </div>
            </div>

            <div className="row mt-5 g-4">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="accessBox">
                        <div className="accessBox__content">
                            <div className="accessBox__content__image">
                                <img src="src/assets/Images/access2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="accessBox">
                        <div className="accessBox__content">
                            <div className="accessBox__content__image">
                                <img src="src/assets/Images/access3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="accessBox">
                        <div className="accessBox__content">
                            <div className="accessBox__content__image">
                                <img src="src/assets/Images/access4.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="accessBox">
                        <div className="accessBox__content">
                            <div className="accessBox__content__image">
                                <img src="src/assets/Images/access5.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="accessBox">
                        <div className="accessBox__content">
                            <div className="accessBox__content__image">
                                <img src="src/assets/Images/access6.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="accessBox">
                        <div className="accessBox__content">
                            <div className="accessBox__content__image">
                                <img src="src/assets/Images/access7.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="accessBox">
                        <div className="accessBox__content">
                            <div className="accessBox__content__image">
                                <img src="src/assets/Images/access8.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="accessBox">
                        <div className="accessBox__content">
                            <div className="accessBox__content__image">
                                <img src="src/assets/Images/access9.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="accessBox">
                        <div className="accessBox__content">
                            <div className="accessBox__content__image">
                                <img src="src/assets/Images/access10.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="accessBox">
                        <div className="accessBox__content">
                            <div className="accessBox__content__image">
                                <img src="src/assets/Images/access11.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="accessBox">
                        <div className="accessBox__content">
                            <div className="accessBox__content__image">
                                <img src="src/assets/Images/access12.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="accessBox">
                        <div className="accessBox__content">
                            <div className="accessBox__content__image">
                                <img src="src/assets/Images/access13.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-3 g-1'>
                <div className='col-md-3'>
                    <div className='back__link mx-auto d-flex justify-content-center'>
                        <Link className='btn btn-primary form-control btn-outline-danger text-white border-0' to='/Categories'>Back To Categories</Link>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className='back__link mx-auto d-flex justify-content-center'>
                        <Link className='btn btn-primary form-control btn-outline-danger text-white border-0' to='/Mobiles'>Back To Mobiles Category</Link>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className='back__link mx-auto d-flex justify-content-center'>
                        <Link className='btn btn-primary form-control btn-outline-danger text-white border-0' to='/Laptops'>Back To Laptops Category</Link>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className='back__link mx-auto d-flex justify-content-center'>
                        <Link className='btn btn-primary form-control text-white border-0' to='/Watches'>Back To Watches Category</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

