import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';

/* Load Lazy Components  */
import { Home, About, NotFound } from '../pages';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about-us', element: <About /> },
    ],
  },

  {
    path: '*', element: <NotFound />
  }
])

export default routes;