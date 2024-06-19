import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Browse from './components/Browse';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <SignUp />,
        },
        {
          path: "/signIn",
          element: <SignIn />
        }
      ]
    },
    {
      path: "/browse",
      element: <Browse/>
    }]);

  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
