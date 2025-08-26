const items = [
  "Kalki Studios",
  "Kalki Protocol",
  "Kalki Labs",
  "Kalki Forge",
  "Kalki Talent",
  "Kalki Vision",
];

export default function Ecosystem() {
  return (
    <section>
      <h2>The Ecosystem</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
