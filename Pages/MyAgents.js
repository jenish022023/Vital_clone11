import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import Sidenav from '../Components/Sidenav';
import './MyAgents.css';

  const MyAgents = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://dummyapi.online/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
  

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
        <h1>Product Table</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Category</th>
                    <th>name</th>
                    <th>Price</th>
                    <th> Featured Image</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                  <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td >{product.description}</td>
                        <td>${product.basePrice}</td>
                        <td><img src={product.featuredImage} alt="/" width="100" height="100"/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  );
                };
export default MyAgents;
