import React from 'react'
import './MyDealers.css'
import { Grid } from '@mui/material';
import Sidenav from '../Components/Sidenav';

const data = [
  ["10-8 Emergency Vehicle Services Llc", "PA138", "Michael Putnam", "michaelp@10-8evs.net", "501b East Main St, New Holland"],
  ["1075 Emergency Lighting LLC", "NJ118", "Ryan Dodd", "rdodd@1075vehicles.com", "14 First Ave, Haskell"],
  ["911 Fleet And Fire Equipment Holdings, LLC", "KY117", "Andrew Barnard", "abarnard@911fleet.com", "11 Lendale Dr., Florence"],
  ["ABC Test", "", "ABC Cutting", "techleadz.alpha@gmail.com", "Street # 87 NY, Newyork, Saint Paul"],
  ["Absolute Fire Protection", "NJ119", "Tony Amoroso", "tony@absolutefire.com", "2800 Hamilton Blvd, South Plainfield"],
  ["Adirondack EVG Inc", "NH103", "Daniel Olszanski", "admin@adkevg.com", "264 S River Rd Ste 436, Bedford"],
  ["Advantech Service & Parts, LLC", "OH140", "Scott Carlisle", "scarlisle@advantech911.com", "PO Box 556, Midvale"],
  ["Agreement_test_20230620", "", "Charles Parry", "primary_20230620@vitaltrendsusa.com", "44 Hillside Ave, Midland Park"],
  ["Al Test Dealer II", "", "Alice Department", "AFaye@aol.com", "929 Main Street, Genoa"],
  ["Al Test I", "", "George Farmer", "georgefarmer1111@gmail.com", "2929 Pioneer Street, Edmeston"]
];


export default function MyDealers() {
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
    
    <div className="table-container">
        <h1>My dealers</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Dealer Name</th>
            <th>AR #</th>
            <th>Primary Contact Name</th>
            <th>Primary Contact Email</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </>
  );
}

