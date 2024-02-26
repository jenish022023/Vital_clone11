import React from 'react';
import './DealerAgreement.css';
import { Grid } from '@mui/material';
import Sidenav from '../../Components/Sidenav';

export default function DealerAgreement() {
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
      {/* <div className="agreementheader">Dealer Agreement</div> */}
      <form className="form-style-9">
        <span className="agreementheader">Dealer Agreement</span>
        <ul>
          <li>
            <input type="text" name="field1" className="field-style field-split align-left" placeholder="Name" />
            <input type="email" name="field2" className="field-style field-split align-right" placeholder="Email" />
          </li>
          <li>
            <input type="text" name="field3" className="field-style field-split align-left" placeholder="Phone" />
            <input type="url" name="field4" className="field-style field-split align-right" placeholder="Website" />
          </li>

          <li>
            <label><b>select gender</b></label>
            <br />
            <div className='radiobutton'>
            <input type="radio" id="html" name="fav_language" value="Male" />
            <label htmlFor="html">Male</label>
           
            <input type="radio" id="css" name="fav_language" value="Female" />
            <label htmlFor="css">Female</label>
            </div>
           
          </li>
          <li>
            <input type="text" name="field3" className="field-style field-full align-none" placeholder="Subject" />
          </li>
          <li>
            <textarea name="field5" className="field-style" placeholder="Message"></textarea>
          </li>
          <li>
          <input type="file" accept="image/*"/>
          </li>
          <li>
          <input type="date" />
          </li>
          <li>
            <input type="submit" value="Submit" />
          </li>
        </ul>
      </form>
    </>
  );
}
