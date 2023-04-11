import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductProvider } from './context/ProductsContext';
import { FilterProvider } from './context/FilterContext';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import { Auth0Provider } from '@auth0/auth0-react';

import './sass/main.scss';

//dev-ai82moied356mewu.us.auth0.com
//bmqJfyn7qnLXBbaTzbX1oq2j3S0eNwJy
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-ai82moied356mewu.us.auth0.com"
      clientId="bmqJfyn7qnLXBbaTzbX1oq2j3S0eNwJy"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
