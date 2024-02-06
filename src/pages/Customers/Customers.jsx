import PageTitle from '../../Components/Layout/PageTitle/PageTitle'
import './Customers.css'
export default function Customers() {
  
  return (
    <>
    <div className='customers__page'>
     <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <PageTitle title="Customers Page"/>
            </div>
        </div>
        <div className='row mt-5 g-3'>
            <div className='col-md-4 col-sm-12'>
                <div className='cards d-flex flex-column align-items-center shadow'>
                    <div className='image__content'>
                        <div className='card__image'>
                            <img className='overflow-hidden' src="src/assets/Images/man3.jpg" alt="" />
                        </div>
                    </div>
                    <div className='card__content d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='namee'>David Dell</h2>
                        <p className='des'>The Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima cupiditate totam quod, sequi nihil dolorem doloribus facilis quis quibusdam eius dignissimos.</p>
                        <button className='btn btn-primary border-0'>View More</button>
                        </div>
                </div>
            </div>
            <div className='col-md-4 col-sm-12'>
                <div className='cards d-flex flex-column align-items-center shadow'>
                    <div className='image__content'>
                        <div className='card__image'>
                            <img className='overflow-hidden' src="src/assets/Images/man4.jpg" alt="" />
                        </div>
                    </div>
                    <div className='card__content d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='namee'>Alex Marino</h2>
                        <p className='des'>The Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima cupiditate totam quod, sequi nihil dolorem doloribus facilis quis quibusdam eius dignissimos.</p>
                        <button className='btn btn-primary border-0'>View More</button>
                        </div>
                </div>
            </div>
            <div className='col-md-4 col-sm-12'>
                <div className='cards d-flex flex-column align-items-center shadow'>
                    <div className='image__content'>
                        <div className='card__image'>
                            <img className='overflow-hidden' src="src/assets/Images/man5.jpg" alt="" />
                        </div>
                    </div>
                    <div className='card__content d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='namee'>Steven Gohn</h2>
                        <p className='des'>The Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima cupiditate totam quod, sequi nihil dolorem doloribus facilis quis quibusdam eius dignissimos.</p>
                        <button className='btn btn-primary border-0'>View More</button>
                        </div>
                </div>
            </div>
            <div className='col-md-4 col-sm-12'>
                <div className='cards d-flex flex-column align-items-center shadow'>
                    <div className='image__content'>
                        <div className='card__image'>
                            <img className='overflow-hidden' src="src/assets/Images/man6.jpg" alt="" />
                        </div>
                    </div>
                    <div className='card__content d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='namee'>Alberto Bony</h2>
                        <p className='des'>The Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima cupiditate totam quod, sequi nihil dolorem doloribus facilis quis quibusdam eius dignissimos.</p>
                        <button className='btn btn-primary border-0'>View More</button>
                        </div>
                </div>
            </div>
            <div className='col-md-4 col-sm-12'>
                <div className='cards d-flex flex-column align-items-center shadow'>
                    <div className='image__content'>
                        <div className='card__image'>
                            <img className='overflow-hidden' src="src/assets/Images/man7.jpg" alt="" />
                        </div>
                    </div>
                    <div className='card__content d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='namee'>Dani Ulmo</h2>
                        <p className='des'>The Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima cupiditate totam quod, sequi nihil dolorem doloribus facilis quis quibusdam eius dignissimos.</p>
                        <button className='btn btn-primary border-0'>View More</button>
                        </div>
                </div>
            </div>
            <div className='col-md-4 col-sm-12'>
                <div className='cards d-flex flex-column align-items-center shadow'>
                    <div className='image__content'>
                        <div className='card__image'>
                            <img className='overflow-hidden' src="src/assets/Images/man8.jpg" alt="" />
                        </div>
                    </div>
                    <div className='card__content d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='namee'>Toni Kroos</h2>
                        <p className='des'>The Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima cupiditate totam quod, sequi nihil dolorem doloribus facilis quis quibusdam eius dignissimos.</p>
                        <button className='btn btn-primary border-0'>View More</button>
                        </div>
                </div>
            </div>
        </div>
     </div>
    </div>
    </>
  )
}
