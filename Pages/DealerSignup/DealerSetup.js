import React from 'react'
import Dashboard from '../../Dashboard'
import { Grid } from '@mui/material'
import Sidenav from '../../Components/Sidenav'

export default function DealerSetup() {
  return (
    <>
    <Grid item md={2} xs={12}>
        <Sidenav />
      </Grid>
      <div class="header-content">
        <nav class="navbar navbar-expand">
          <div className="content">
            <div><strong><i>Sales Agent</i></strong>: Jason Perry <i>(607) 379-9349</i></div><br />

          </div>
        </nav>
        </div>
    <div>Dealer Setup</div>
    {/* </Dashboard> */}
  </>
  )
}
