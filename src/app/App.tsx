import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Components
import {AppLayout} from "@/components/layout/AppLayout";
import Home from "@/app/routes/Home";
import Welcome from "@/app/routes/Welcome";
import ClientHome from "@/app/routes/ClientHome";
import Login from "@/app/routes/Login";
import Signup from "@/app/routes/Signup";

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
