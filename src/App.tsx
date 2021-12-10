import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Details from "./pages/Details";
import Home from "./pages/Home";
import IndexPortofolio from "./pages/IndexPortofolio";
import Error from "./pages/Error";

// <!-- FontAwesome JS -->
// import "./assets/fontawesome/js/all.js";

// <!-- Global CSS -->
import "./assets/plugins/bootstrap/css/bootstrap.min.css";

// <!-- github calendar css -->
import "./assets/plugins/github-calendar/dist/github-calendar-responsive.css";

// <!-- github activity css -->
import "./assets/plugins/github-activity/src/github-activity.css";

// <!-- Theme CSS -->
import "./assets/css/styles.css";
// <!-- END: CUSTOM STYLE PROVIDE BY DEVBLOG -->

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPortofolio />}></Route>
          <Route path="/blog" element={<Home />}>
            <Route path="articles/" element={<Details />}>
              <Route path="articles/:articlesId" element={<Details />}></Route>
            </Route>
            <Route path="categories/" element={<Details />}>
              <Route
                path="categories/:categoriesId"
                element={<Details />}
              ></Route>
            </Route>
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
