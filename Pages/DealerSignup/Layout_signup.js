import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'



const Layout_signup = () => {
  return (
    <div>
       <nav>
        <ul>
          <li>
            <Link to="/DealerAgreement">Dealer Agreement</Link>
          </li>
          <li>
            <Link to="/DealerW-9">Dealer W-9</Link>
          </li>
          <li>
            <Link to="/DealerSetup">Dealer Setup</Link>
          </li>
          <li>
            <Link to="/DealerAddendum">Dealer Addendum</Link>
          </li>
          <li>
            <Link to="/AffiliateFeeForms">Affiliate Fee Forms</Link>
          </li>
          <li>
            <Link to="/Footer">Footer</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout_signup
