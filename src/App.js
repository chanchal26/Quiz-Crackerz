import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
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
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home />
        },
        {
          path: '/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home />
        },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics />
        },
        {
          path: '/Blog',
          element: <Blog />
        },
        {
          path: '/topics/:topicId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`);
          },
          element: <Quiz />
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
