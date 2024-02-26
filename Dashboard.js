import React from 'react'
// import DealerAgreements from './Pages/PendingItems/DealerAgreements'
import { Grid } from '@mui/material'
import Sidenav from './Components/Sidenav'
import DealerSetup from './Pages/DealerSignup/DealerSetup'

function Dashboard() {
  return (
      <>
     
      <div class="header-content">
        <nav class="navbar navbar-expand">
          <div className="content">
            <div><strong><i>Sales Agent</i></strong>: Jason Perry <i>(607) 379-9349</i></div><br />
        <DealerSetup/>
          </div>
        </nav>
    </div>
    <div> Please select from left side navbar</div>
  </>
  )

}

export default Dashboard
