import "./App.css";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/index";
import Services from "./Pages/Services/index.jsx";
import Whoweare from "./Pages/Who-we-are/index";
import Research from "./Pages/Research/index";
import Signin from "./Pages/Sigin-in/index";
import Donate from "./Pages/Donate/index";
import RootLayout from "./Pages/Root";

// import Navbar from "./Components/Navbar/Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/services", element: <Services /> },
        { path: "/who-we-are", element: <Whoweare /> },
        { path: "/research", element: <Research /> },
        { path: "/signin", element: <Signin /> },
        { path: "/donate", element: <Donate /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />

      {/* <Footer/> */}
    </>
  );
}

export default App;
