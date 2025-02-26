import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import Landing from "./pages/landing";
import LoginPage from "./pages/loginpage";
import ContactForm from "./pages/contactus";
import BookFinder from "./pages/bookfinder";
import RecommendationLetter from "./pages/lor";
import EmailTemplates from "./pages/emailtemplates";
import CSE from "./pages/cse";
import Electronics from "./pages/ece";
import Civil from "./pages/civil";
import Dashboard from "./pages/dashboard";
import EngineeringPage from "./pages/engineering";
import CSERoadmapPage from "./pages/roadmap";

import './App.css';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/contact-us",
        element: <ContactForm />,
      },
      {
        path: "/bookfinder",
        element: <BookFinder />,
      },
      {
        path: "/lor",
        element: <RecommendationLetter />,
      },
      {
        path: "/email-templates",
        element: <EmailTemplates />,
      },
      {
        path: "/cse",
        element: <CSE />,
      },
      {
        path: "/ece",
        element: <Electronics />,
      },
      {
        path: "/civil",
        element: <Civil />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/engineering",
        element: <EngineeringPage />,
      },
      {
        path: "/roadmap",
        element: <CSERoadmapPage />,
      },


    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
