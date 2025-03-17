import ressurser from "./ressurser";

function Resources({ category }) {
  const filtered = ressurser.filter((res) => res.category === category);

  return (
    <div>
      <h2>{category.toUpperCase()} Ressurser</h2>
      {filtered.length === 0 ? (
        <p>Ingen ressurser funnet for {category}.</p>
      ) : (
        <ul>
          {filtered.map((res) => (
            <li key={res.url}>
              <a href={res.url} target="_blank" rel="noopener noreferrer">
                {res.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Resources;