import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home"
import Product from "./pages/product"
import About from "./pages/about"
import Contact from "./pages/contact"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export default function App() {

  const queryClient = new QueryClient()

  // Créer le "router" pour l'association des routes et leur composant
  const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/product", element: <Product />},
    {path: "/about", element: <About />},
    {path: "/contact", element: <Contact />},
  ])
 
  // Définir le composant comme "navigateur", en lui spécifiant les routes acceptées
  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
