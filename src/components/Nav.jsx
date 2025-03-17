import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Resources from "./Resources";

function App() {
  return (
    <Router>
      <main>
        <nav>
          <Link to="/html"><button>HTML</button></Link>
          <Link to="/css"><button>CSS</button></Link>
          <Link to="/javascript"><button>JavaScript</button></Link>
          <Link to="/react"><button>React</button></Link>
          <Link to="/sanity"><button>Sanity and Headless CMS</button></Link>
        </nav>

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
