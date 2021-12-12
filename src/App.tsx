import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ArticleDetails from "./pages/blog/ArticleDetails";
import Article from "./pages/blog/Article";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Category from "./pages/blog/Category";
import CategoryDetails from "./pages/blog/CategoryDetails";

function App() {
  return (
    <>
      <Router>
        {/*<!-- Navigation -->*/}
        <Navbar />
        {/* ----------- */}

        <Routes>
          <Route path="/" element={<Article />}>
            <Route path="blog" element={<Article />}>
              <Route
                path="articles/:articlesId"
                element={<ArticleDetails />}
              ></Route>
              <Route path="categories" element={<Category />}>
                <Route
                  path=":categoriesId"
                  element={<CategoryDetails />}
                ></Route>
              </Route>
            </Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>

        {/*<!-- Footer -->*/}
        <Footer />
        {/* ----------- */}
      </Router>
    </>
  );
}

export default App;
