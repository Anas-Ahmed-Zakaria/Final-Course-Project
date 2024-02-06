import './About.css'
import PageTitle from '../../Components/Layout/PageTitle/PageTitle'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export default function About() {
  return (
    <div className='about__page mt-5'>
      <div className='container'>
      <div className='row'>
          <div className='col-md-12 mt-5'>
            <PageTitle title='About Us Page'/>
          </div>
        </div>

        <div className='row mt-5 g-2'>
          <div className='col-lg-6 col-md-1 col-sm-1'>
            <div className='about__left__part'>
              <div className='about__left__part__title'>
                <h2 className='fw-bold'>Our Online Store</h2>
              </div>
              <div className='about__left__part__description'>
                <p>E-commerce stores are typically cheaper to set up and operate than physical brick-and-mortar stores. You can cut costs and avoid paying for rent, furnishings, signs, and more.An e-commerce store never closes its doors to customers. Customers can purchase products at nearly any time of day, from anywhere in the world. Because they are not limited by opening hours or proximity, your business could exponentially increase sales.Within the online marketplace, there are many ways to enhance the customer experience and reach consumers with digital marketing. Social media and SEO allow you to connect with customers actively searching for goods and services like yours. Track your customers behaviors and habits, such as monitoring their shopping carts and improving your checkout processes.</p>
              </div>

        <div className='about__left__part__footer'>
        <div className='icons d-flex gap-3 mt-3 fw-bold fs-3'>
        <div className='facebookIcon icon'>
          <Link className='text-primary icon__inside' to='https://www.facebook.com' target='_blank'><FaFacebook /></Link>
        </div>
        <div className='twitterIcon icon'>
          <Link className='text-primary icon__inside' to='https://www.twitter.com' target='_blank'><FaTwitter/></Link>
        </div>
        <div className='linkedinIcon icon'>
          <Link className='text-primary icon__inside' to='https://www.linkedin.com' target='_blank'><FaLinkedin/></Link>
        </div>
        <div className='instagramIcon icon'>
          <Link className='text-primary icon__inside' to='https://www.instagram.com' target='_blank'><FaInstagramSquare/></Link>
        </div>
        <div className='githubIcon icon'>
          <Link className='text-primary icon__inside' to='https://www.github.com/Anas-Ahmed-Zakaria' target='_blank'><FaGithub/></Link>
        </div>
        <div className='gmailIcon icon'>
          <Link className='text-primary icon__inside' to='https://mail.google.com/mail/u/0/#inbox' target='_blank'><SiGmail/></Link>
        </div>
      </div>

      <div className='phone mt-2 text-decoration-none'>
        <a className='text-decoration-none' href='tel: +2001069166549' target='__blank'>+20 01069166549</a>
      </div>
      
              </div>

            </div>
          </div>
          <div className='col-lg-6 col-md-1 col-sm-1'>
            <div className='about__right__part'>
              <div className='about__right__part__image'>
                <img className='w-100 h-100' src="src/assets/Images/about2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
