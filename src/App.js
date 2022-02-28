import './App.css';

import Thermos from './components/Thermos';

function App() {
  const coffee = { brewedAt: '2022-02-28T09:17:57.652Z', litersBrewed: '1.5' };
  return (
    <div className="App">
      <header></header>
      <main>

        <div id="examples">
          <h2>Examples</h2>
          <Thermos {...coffee} />

        </div>

      </main>
    </div>
  );
}

export default App;
