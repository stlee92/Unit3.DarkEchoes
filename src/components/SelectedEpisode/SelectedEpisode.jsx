import "./SelectedEpisode.css";

function SelectedEpisode() {
  return (
    <div className="SelectedEpisode">
      <h3>SelectedEpisode</h3>
      <button onClick={() => WatchEpisode}>Watch Now</button>
    </div>
  );
}

export default SelectedEpisode;
