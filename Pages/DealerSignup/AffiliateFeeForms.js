import React from 'react'
import Sidenav from '../../Components/Sidenav'
import { Grid } from '@mui/material'

export default function AffiliateFeeForms() {
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
    <div>Affiliate Fee Forms</div>
    </>
  )
}
