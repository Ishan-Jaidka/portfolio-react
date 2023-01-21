import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./views/homePage";
import AboutMe from "./views/aboutMe";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import PageNotFound from "./views/pageNotFound";
import ProjectPage from "./views/projectPage";
import ProjectsTabbed from "./views/projectsTabs";

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
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <div>
      <NavBar />
      <div className="App-header">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
