import React from 'react';
import './DealerWarrenty.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import Sidenav from '../../Components/Sidenav';

function DealerWarrenty() {
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
      <strong>WELCOME TO THE PAGE OF DEALER WARRENTY</strong>
    </div>
    </>
  )
}

export default DealerWarrenty
