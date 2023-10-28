import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Bookings from "../pages/bookings/Bookings";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import LoginLayout from "../layouts/LoginLayout";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Register from "../pages/register/Register";
import RootLayout from "../layouts/RootLayout";
import ServiceBooking from "../pages/serviceBooking/ServiceBooking";
import Services from "../pages/services/Services";
import TermsConditions from "../pages/termsConditions/TermsConditions";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service-booking/:id",
        element: <ServiceBooking />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "terms-conditions",
        element: <TermsConditions />,
      },
    ],
  },
]);

export default router;
