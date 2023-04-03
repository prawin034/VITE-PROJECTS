import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import SingleProduct from './pages/SingleProduct';
import CartPage from './pages/CartPage';
import ErrorPage from './pages/ErrorPage';
import RootPage from './pages/RootPage';
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
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
