import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import HomeContent from "./HomeContent";
import About from "./About";
import ErrorPage from "./ErrorPage";
import App2Home from "app2/App2Home";
import Nav from "./Nav";

export default function MainLayout() {
  return (
    <Router>
      <div className="container mx-auto bg-slate-100 h-dvh">
        <div className="flex flex-col h-full">
          <Header></Header>
          {/* row 1 */}
          <div className="flex flex-row h-full">
          <Nav></Nav>

            {/* col 2 */}
            <div className="my-10">
              <Routes>
                <Route path="/" element={<HomeContent />} />
                <Route path="app2" element={<App2Home />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </div>

          {/* row 2 */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}
