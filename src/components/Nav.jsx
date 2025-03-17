import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/html"><button>HTML</button></Link>
      <Link to="/css"><button>CSS</button></Link>
      <Link to="/javascript"><button>JavaScript</button></Link>
      <Link to="/react"><button>React</button></Link>
      <Link to="/sanity"><button>Sanity and Headless CMS</button></Link>
    </nav>
  );
};

export default Nav;