import React from 'react'
import './Footer.css'
import facebook from './resources/facebook.svg'
import twitter from './resources/twitter.svg'
import linkedin from './resources/linkedin.svg'
import media from './resources/media.svg'
import github from './resources/github.svg'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-container">
        <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Products</h2>
            <Link to='/'>Tiramisu chocolate</Link>
            <Link to='/'>Pastry tart</Link>
            <Link to='/'>Pliipop brownie</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Collaboration</h2>
            <Link to='/'>Tiramisu chocolate</Link>
            <Link to='/'>Pastry tart</Link>
            <Link to='/'>Pliipop brownie</Link>
          </div>
        </div>
      </div>
        <div className="footer-social-media">
                        <Link to=''><img src={facebook} alt='facebook'/></Link>
                        <Link to=''><img src={twitter} alt='facebook'/></Link>
                        <Link to=''><img src={linkedin} alt='facebook'/></Link>
                        <Link to=''><img src={media} alt='facebook'/></Link>
                        <Link to=''><img src={github} alt='facebook'/></Link>

        </div>
        <div className="footer-policy">
                    <p>© 2003 - 2022 Carrot cake sweet pie Sp. z o.o. All rights reserved.</p>
                    <Link to=''> Legal </Link>
                    <Link to=''> Privacy policy </Link>
                    <p>Proud to be open source</p>
        </div>
      </div>
  )
}

export default Footer