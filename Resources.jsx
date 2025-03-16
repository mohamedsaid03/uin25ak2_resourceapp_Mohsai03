import { resources } from "./ressurser";

function Resources({ category }) {
  const filteredResources = resources.filter(res => res.category === category);

  return (
    <div>
      <h2>{category.toUpperCase()} Resources</h2>
      <ul>
        {filteredResources.map(res => (
          <li key={res.url}>
            <a href={res.url} target="_blank" rel="noopener noreferrer">
              {res.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;
