import { episodeList } from "./data.js";
import Episodes from "./components/Episodes/Episodes";
import SelectedEpisode from "./components/SelectedEpisode/SelectedEpisode";
console.log(episodeList);

export default function App() {
  return (
    <>
      <div>
        <h1>Dark Echoes</h1>
        <Episodes episodes={episodeList} />
        <SelectedEpisode />
      </div>
    </>
  );
}
