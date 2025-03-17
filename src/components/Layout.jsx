import React from "react";

import { Link } from "react-router-dom";



function Layout({ children }) {
  return (
    <div>
      {}
      <main>
        {}
        <button id="knpHTML">
          <Link to="/html">HTML</Link>
        </button>
        <button id="knpCSS">
          <Link to="/css">CSS</Link>
        </button>
        <button id="knpJScript">
          <Link to="/javascript">JavaScript</Link>
        </button>
        <button id="knpReact">
          <Link to="/react">React</Link>
        </button>
        <button id="knpSHCMS">
          <Link to="/sanity">Sanity and Headless CMS</Link>
        </button>

        <section>
          <nav id="main">
            {}
          </nav>
        </section>

        {}
        {children}
      </main>
    </div>
  );
}

export default Layout;
