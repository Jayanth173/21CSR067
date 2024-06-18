import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css'; // Import your CSS file for styling

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000", {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4NjkxNjA0LCJpYXQiOjE3MTg2OTEzMDQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijc0ZTRiNmQ1LWZmNzgtNGVmMy1iMDA5LTViYjMwN2U3M2QzYiIsInN1YiI6ImpheWFudGhqci4yMWNzZUBrb25ndS5lZHUifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6Ijc0ZTRiNmQ1LWZmNzgtNGVmMy1iMDA5LTViYjMwN2U3M2QzYiIsImNsaWVudFNlY3JldCI6Ik14WGtybWhTRkpLVVNOT3giLCJvd25lck5hbWUiOiJKYXlhbnRoIiwib3duZXJFbWFpbCI6ImpheWFudGhqci4yMWNzZUBrb25ndS5lZHUiLCJyb2xsTm8iOiIyMWNzcjA2NyJ9.k-lgvfOzeDbYdIi6GSkk866Vq2kxDO8gGIwuDlY-vek`
      }
    })
    .then(response => {
      setProducts(response.data);
    })
    .catch(err => {
      console.error(err);
    });
  }, []);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpKTecT68g8XQ5mXNZInylTDXRFq039kfw7uEJjCAcP8tnHlksD5XEdNfPHAeKTP4SA0&usqp=CAU" alt={product.productName} />
            <h2>{product.productName}</h2>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Rating:</strong> {product.rating}</p>
            <p><strong>Discount:</strong> {product.discount}%</p>
            <p><strong>Availability:</strong> {product.availability}</p>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default ProductList;
