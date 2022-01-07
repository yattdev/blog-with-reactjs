import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./App.css";
import ArticleDetails from "./pages/blog/ArticleDetails";
import Article from "./pages/blog/Article";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Category from "./pages/blog/Category";
import CategoryDetails from "./pages/blog/CategoryDetails";

function App() {
  let element = useRoutes([
    // These are the same as the props you provide to <Route>
    { path: "/", element: <Article /> },

    // Article urls
    { path: "articles", element: <Article /> },
    { path: "articles/:articleName/:articleUID", element: <ArticleDetails /> },

    // Category urls
    { path: "categories", element: <Category /> },
    {
      path: "categories/:categoryName/:categoryId",
      element: <CategoryDetails />,
    },

    // Not found routes work as you'd expect
    { path: "*", element: <Error /> },
  ]);

  // The returned element will render the entire element
  // hierarchy with all the appropriate context it needs
  return element;
}

const AppWrapper = () => {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      <App />
      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default AppWrapper;
