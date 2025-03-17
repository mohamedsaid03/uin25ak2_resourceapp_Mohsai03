import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PageTitle from "./components/PageTitle";
import Resources from "./components/Resources";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/html"
            element={
              <>
                <PageTitle title="HTML" />
                <Resources category="html" />
              </>
            }
          />
          <Route
            path="/css"
            element={
              <>
                <PageTitle title="CSS" />
                <Resources category="css" />
              </>
            }
          />
          <Route
            path="/javascript"
            element={
              <>
                <PageTitle title="JavaScript" />
                <Resources category="javascript" />
              </>
            }
          />
          <Route
            path="/react"
            element={
              <>
                <PageTitle title="React" />
                <Resources category="react" />
              </>
            }
          />
          <Route
            path="/sanity"
            element={
              <>
                <PageTitle title="Sanity and Headless CMS" />
                <Resources category="headless-cms" />
              </>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
