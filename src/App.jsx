import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";

//layouts
import Root from "./layouts/Root";
import Help from "./layouts/Help";
import Faq from "./pages/help/Faq";
import Contacts from "./pages/help/Contact";

//help

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="help" element={<Help />}>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="contact" element={<Contacts />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
