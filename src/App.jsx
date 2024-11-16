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
import NotFound from "./pages/NotFound";
import Careers, { careerLoader } from "./pages/careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";

//layouts
import Root from "./layouts/Root";
import Help from "./layouts/Help";
import CareersLayout from "./layouts/CareersLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>

      <Route path="help" element={<Help />}>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="contact" element={<Contacts />}></Route>
      </Route>

      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careerLoader}></Route>

        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        ></Route>
      </Route>

      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
