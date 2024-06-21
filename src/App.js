import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import SignUp from './components/LoginPage/SignUp';
import SignIn from "./components/LoginPage/SignIn";
import Browse from './components/HomePage/Browse';
import { Provider } from 'react-redux';
import store from './reduxStore/store';

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
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
