import useSound from 'use-sound';
import sound_A from './a.mp3';

const PlayA = () => {
  const [playA] = useSound(sound_A);
  return <button onClick={playA}>vowel "A"!</button>;
};

function App() {
  return (
    <div className="App">
      <PlayA />
    </div>
  );
}

export default App;
