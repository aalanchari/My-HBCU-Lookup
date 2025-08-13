import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//CSS
import './index.css'
import '@fontsource/roboto/300.css'

//TSX files
import Profile from './Profile.tsx'                //App.tsx
import Home from './pages/Home.tsx'        //Home.tsx
import Explore from './pages/Explore.tsx'  //Explore.tsx
import NotFound from './pages/NotFound';  //NotFound.tsx is the 1st page of website

//React ROUTER
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> // Home page at root
  },
  {
    path: "/profile/:profileID",
    element: <Profile />
  },
  {
    path: "/explore",
    element: <Explore />
  },
  {
    path: '*',
    element: <NotFound />
  }

  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
