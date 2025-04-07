import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Root1 from "./pages/Root1";
import Root from "./pages/Root";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Root3 from "./pages/Root3";
import Root4 from "./pages/Root4";
import Root2 from "./pages/Root2";
import Root5 from "./pages/Root5";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-427318964":
        title = "";
        metaDescription = "";
        break;
      case "/signup-page":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/frame-427318962":
        title = "";
        metaDescription = "";
        break;
      case "/frame-427318963":
        title = "";
        metaDescription = "";
        break;
      case "/frame-427318961":
        title = "";
        metaDescription = "";
        break;
      case "/frame-427318969":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Root1 />} />
      <Route path="/frame-427318964" element={<Root />} />
      <Route path="/signup-page" element={<SignupPage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/frame-427318962" element={<Root3 />} />
      <Route path="/frame-427318963" element={<Root4 />} />
      <Route path="/frame-427318961" element={<Root2 />} />
      <Route path="/frame-427318969" element={<Root5 />} />
    </Routes>
  );
}
export default App;
