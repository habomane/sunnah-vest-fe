import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Components
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import ClientHome from "./pages/ClientHome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: "/", element: <Home /> },
      { path: "/welcome", element: <Welcome />},
      { path: "/client/home", element: <ClientHome />},
      { path: "/login", element: <Login />},
      { path: "/signup", element: <Signup />}
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
