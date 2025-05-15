import "./Episodes.css";

function Episodes({ episodes }) {
  return (
    <>
      <h3>Episodes</h3>
      <div className="Episodes">
        {episodes.map((episode) => (
          <p key={episode.id}>{episode.title}</p>
        ))}
      </div>
    </>
  );
}

export default Episodes;
