import {
  createBrowserRouter,
  redirect,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import SingleProduct from './pages/SingleProduct';
import CartPage from './pages/CartPage';
import ErrorPage from './pages/ErrorPage';
import RootPage from './pages/RootPage';
import Checkout from './components/Checkout';
import { isAuthenticated } from './utils/PrivateRoute';
import PrivateRoute from './pages/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,

    children: [
      { index: true, element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:id', element: <SingleProduct /> },
      { path: '/cart', element: <CartPage /> },
      {
        path: '/checkout',
        element: <Checkout />,
        loader: async () => {
          const token = localStorage.getItem('id_token');
          if (!token) {
            return redirect('/');
          }
          return redirect('/checkout');
        },
      },

      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

function App() {
  const token = localStorage.getItem('id_token');
  console.log(token);
  return <RouterProvider router={router} />;
}

export default App;
