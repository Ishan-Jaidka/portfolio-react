import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./views/homePage";
import AboutMe from "./views/aboutMe";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import PageNotFound from "./views/pageNotFound";
import ProjectPage from "./views/projectPage";
import ProjectsTabbed from "./views/projectsTabs";
import { createTheme, ThemeProvider } from "@mui/material";
import Experience from "./views/experience";
import ExperiencePage from "./views/experiencePage";

import AOS from "aos";
import "aos/dist/aos.css";

const theme = createTheme({
  palette: {
    background: {
      paper: "#282c34",
      light: "#34425A",
    },
    primary: {
      main: "#003185",
      bright: "#004BA5",
      light: "#0096FF",
    },
    secondary: {
      main: "#FFFFFF",
    },
    warning: {
      main: "#ffc242",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutMe />,
  },
  {
    path: "/projects",
    element: <ProjectsTabbed />,
  },
  {
    path: "/projects/:projectname",
    element: <ProjectPage />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/experience/:company",
    element: <ExperiencePage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
        <div className="App-header">
          <RouterProvider router={router} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
