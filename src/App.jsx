import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Resources from "./Resources";

function App() {
  return (
    <Router>
      <main>
        {/* Navigasjonsknapper */}
        <nav>
          <button>
            <Link to="/html">HTML</Link>
          </button>
          <button>
            <Link to="/css">CSS</Link>
          </button>
          <button>
            <Link to="/javascript">JavaScript</Link>
          </button>
          <button>
            <Link to="/react">React</Link>
          </button>
          <button>
            <Link to="/sanity">Sanity and Headless CMS</Link>
          </button>
        </nav>

        {/* Routing til sidene */}
        <Routes>
          <Route path="/html" element={<Resources category="html" />} />
          <Route path="/css" element={<Resources category="css" />} />
          <Route path="/javascript" element={<Resources category="javascript" />} />
          <Route path="/react" element={<Resources category="react" />} />
          <Route path="/sanity" element={<Resources category="headless-cms" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
