import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

// dev-m4uni3kp.us.auth0.com
// L0gGW737oIFxIvRsBdCIIzvRjiKKEZbY

ReactDOM.render(
    <Auth0Provider
    domain="dev-m4uni3kp.us.auth0.com"
    clientId="L0gGW737oIFxIvRsBdCIIzvRjiKKEZbY"
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
    >
    <UserProvider>
        <ProductsProvider>
            <FilterProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </FilterProvider>
        </ProductsProvider>
    </UserProvider>
</Auth0Provider>,
 document.getElementById('root'))
