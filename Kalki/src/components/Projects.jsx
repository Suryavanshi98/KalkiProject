const projects = [
  { name: "Journeyan - Travel Platform", status: "Active" },
  { name: "Coin Lab - Crypto Research", status: "Development" },
  { name: "Anon Superstar - Digital Identity", status: "Beta" },
];

export default function Projects() {
  return (
    <section>
      <h2>Live Projects</h2>
      <div className="projects">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            {proj.name} <strong>({proj.status})</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
