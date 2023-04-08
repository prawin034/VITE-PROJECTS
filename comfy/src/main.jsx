import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductProvider } from './context/ProductsContext';
import { FilterProvider } from './context/FilterContext';
import { CartProvider } from './context/CartContext';
import './sass/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductProvider>
  </React.StrictMode>
);
