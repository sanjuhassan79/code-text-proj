import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';

import Home from '../pages/Home';
import SingleItem from '../pages/SingleItem';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'single/:id',
        element: <SingleItem />,
      },
    ],
  },
]);

export default routes;
