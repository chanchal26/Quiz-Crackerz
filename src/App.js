import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog';
import Home from './Components/Home';
import Statistics from './Components/Statistics';
import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home />
        },
        {
          path: '/statistics',
          element: <Statistics />
        },
        {
          path: '/Blog',
          element: <Blog />
        },
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
