// DealerSignup.js

import React from 'react';
import './DealerSignup.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import Sidenav from '../../Components/Sidenav';

export default function DealerSignup() {
  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    navigate(route);
  };

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
        <div className="SignUI">
          <div className="signupPage">
            <h1>Welcome to the page of dealer Signup</h1>

          </div>
        </div>
      </div>
    </>
  );
}
