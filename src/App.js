import './App.css';
import CoffeeButton from './components/CoffeeButton';
import CoffeeControl from './components/CoffeeControl';
import CoffeeInfo from './components/CoffeeInfo';
import Thermos from './components/Thermos';

function App() {
  const coffee = { brewedAt: '2022-02-28T09:17:57.652Z', litersBrewed: '1.5' };
  return (
    <div className="App">
      <header></header>
      <main>

        <div id="examples">
          <h1>Examples</h1>
          <Thermos {...coffee} />

          {/* <Thermos {...coffee} className="neumorphism-card"/> */}

          <CoffeeInfo {...coffee} />

          <CoffeeButton />

          <CoffeeButton litersToBrew='1.1' />

          <CoffeeButton litersToBrew='0.5' />

          <CoffeeButton litersToBrew='3.1' />
        </div>

        <span>This is Thermos and CoffeeInfo</span>
        <section id="top-container" className="container neumorphism-card">
          <Thermos {...coffee} />
          <CoffeeInfo {...coffee} />
        </section>

        <span>This is Thermos and CoffeeButtons (individual components)</span>
        <section id="prepare-coffee-container" className="container neumorphism-card">
          <Thermos {...coffee} />

          <div className="flex-columns">
            <CoffeeButton litersToBrew='2.1' />

            <CoffeeButton litersToBrew='1.1' />

            <CoffeeButton litersToBrew='0.5' />
          </div>

        </section>


        <span>This is CoffeeControl (composition: Thermos and CoffeeButton(s)))</span>
        <section>
          <CoffeeControl {...coffee} />
        </section>

      </main>
    </div>
  );
}

export default App;
