import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/about/About';
import ErrorPage from './components/error/ErrorPage';
import Inventory from './components/inventory/Inventory';
import Login from './components/login/Login';
import Orders from './components/orders/Orders';
import Register from './components/register/Register';
import Shop from './components/shop/Shop';
import Main from './layout/Main'
import { productAndCartLoader } from './loaders/productAndCart';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main />, children: [
        {
          path: '/', element: <Shop />
        },
        {
          path: '/shop', element: <Shop />
        },
        {
          path: '/orders',
          loader: productAndCartLoader,
          element: <Orders />
        },
        {
          path: '/inventory', element: <Inventory />
        },
        {
          path: '/about', element: <About />
        },
        {
          path:'/login', element:<Login/>
        },
        {
          path:"/register",element:<Register/>
        },
        {
          path: '*', element: <ErrorPage />
        }
      ]

    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
