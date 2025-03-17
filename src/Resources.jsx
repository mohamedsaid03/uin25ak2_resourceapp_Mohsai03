import ressurser from "../ressurser"; // evt. riktig sti

function Resources({ category }) {
  const filtered = ressurser.filter((res) => res.category === category);

  return (
    <div>
      {/* Du kan evt. bruke PageTitle her */}
      <ul>
        {filtered.map((res) => (
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
