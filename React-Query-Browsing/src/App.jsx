import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/home"
import Detail from "./pages/detail"
import ChildRouteTest from "./components/childroutetest"


function App() {

  const appPath = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "detail", element: <Detail />, 
     children: [
      {
        path: ":userId", element: <Detail />,
        path: "user", element: <ChildRouteTest />
      }
    ]},
])
  return <RouterProvider router={appPath} />
}

export default App
