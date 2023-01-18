import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./views/homePage";
import AboutMe from "./views/aboutMe";
import NavBar from "./components/navBar";
import Projects from "./views/projects";
import Footer from "./components/footer";
import PageNotFound from "./views/pageNotFound";

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
    element: <Projects />,
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
