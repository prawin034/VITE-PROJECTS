import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorElement from './components/ErrorElement';
import Home from './Pages/Home';
import NewTodo from './Pages/NewTodo';

import RootPage from './Pages/RootPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorElement />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'new',
        element: <NewTodo />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
