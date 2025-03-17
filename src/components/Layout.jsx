import React from "react";
// Hvis du vil bruke React Router Link for navigasjon, importer:
import { Link } from "react-router-dom";

// Hvis du har en egen style-fil (f.eks. style.scss), importer den her:
// import "./style.scss";

function Layout({ children }) {
  return (
    <div>
      {/* <main> fra HTML-filen din */}
      <main>
        {/* Knappene dine – fjerner onclick og bruker Link i stedet */}
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
            {/* Her kan du legge mer navigasjon om ønskelig */}
          </nav>
        </section>

        {/* {children} er alt innhold som kommer fra Route-komponentene */}
        {children}
      </main>
    </div>
  );
}

export default Layout;
