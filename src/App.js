import './App.css';
import CoffeeButton from './components/CoffeeButton';
import CoffeeInfo from './components/CoffeeInfo';
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

          <CoffeeInfo {...coffee} />

          <CoffeeButton />

          <CoffeeButton litersToBrew='1.1' />

          <CoffeeButton litersToBrew='0.5' />

          <CoffeeButton litersToBrew='3.1' />

        </div>

      </main>
    </div>
  );
}

export default App;
