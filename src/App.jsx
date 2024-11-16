import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contacts from "./pages/help/Contact";

//layouts
import Root from "./layouts/Root";
import Help from "./layouts/Help";

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
