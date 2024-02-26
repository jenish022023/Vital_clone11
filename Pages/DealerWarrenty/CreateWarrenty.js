import { Grid } from '@mui/material'
import React from 'react'
import Sidenav from '../../Components/Sidenav'

function CreateWarrenty() {
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
    
    <div>
      This is Create Warrenty
    </div>
    </>
  )
}

export default CreateWarrenty
