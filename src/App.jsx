// library
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom';

// component
import RootElement from './layout/RootElement';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootElement />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

const App = () => {
  return(
     <RouterProvider router={route} />
  )
}

export default App;
