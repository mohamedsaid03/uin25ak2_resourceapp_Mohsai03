import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resources from "./Resources";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <main>
        <Nav />
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