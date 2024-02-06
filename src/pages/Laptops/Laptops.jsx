import './Laptops.css'
import PageTitle from "../../Components/Layout/PageTitle/PageTitle";
import { Link } from 'react-router-dom';
export default function Laptops() {
  return (
    <>
    <div className="laptops__page mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <PageTitle title='Laptops Page'/>
                </div>
            </div>

            <div className="row mt-5 g-4">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="laptopBox">
                        <div className="laptopBox__content">
                            <div className="laptopBox__content__image">
                                <img src="src/assets/Images/lap1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="laptopBox">
                        <div className="laptopBox__content">
                            <div className="laptopBox__content__image">
                                <img src="src/assets/Images/lap2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="laptopBox">
                        <div className="laptopBox__content">
                            <div className="laptopBox__content__image">
                                <img src="src/assets/Images/lap3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="laptopBox">
                        <div className="laptopBox__content">
                            <div className="laptopBox__content__image">
                                <img src="src/assets/Images/lap4.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="laptopBox">
                        <div className="laptopBox__content">
                            <div className="laptopBox__content__image">
                                <img src="src/assets/Images/lap5.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="laptopBox">
                        <div className="laptopBox__content">
                            <div className="laptopBox__content__image">
                                <img src="src/assets/Images/lap6.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="laptopBox">
                        <div className="laptopBox__content">
                            <div className="laptopBox__content__image">
                                <img src="src/assets/Images/lap7.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="laptopBox">
                        <div className="laptopBox__content">
                            <div className="laptopBox__content__image">
                                <img src="src/assets/Images/lap8.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="laptopBox">
                        <div className="laptopBox__content">
                            <div className="laptopBox__content__image">
                                <img src="src/assets/Images/lap9.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="laptopBox">
                        <div className="laptopBox__content">
                            <div className="laptopBox__content__image">
                                <img src="src/assets/Images/lap10.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="laptopBox">
                        <div className="laptopBox__content">
                            <div className="laptopBox__content__image">
                                <img src="src/assets/Images/lap11.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="laptopBox">
                        <div className="laptopBox__content">
                            <div className="laptopBox__content__image">
                                <img src="src/assets/Images/lap12.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-3 g-1'>
                <div className='col-md-4'>
                    <div className='back__link mx-auto d-flex justify-content-center'>
                        <Link className='btn btn-primary form-control border-0' to='/Categories'>Back To Categories</Link>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='back__link mx-auto d-flex justify-content-center'>
                        <Link className='btn btn-primary form-control border-0' to='/Mobiles'>Back To Mobiles Category</Link>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='back__link mx-auto d-flex justify-content-center'>
                        <Link className='btn btn-info form-control text-white border-0 go' to='/Watches'>Go To Watches Category</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

