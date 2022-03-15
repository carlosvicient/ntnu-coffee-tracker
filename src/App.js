import React, { Component } from 'react';

import './App.css';
import CoffeeButton from './components/CoffeeButton';
import CoffeeControl from './components/CoffeeControl';
import CoffeeInfo from './components/CoffeeInfo';
import Thermos from './components/Thermos';

import moment from 'moment';

// Coffee:
// { brewedAt, litersBrewed, typeOfCoffee, coffeeLeft, grindingSettings}
// litersToBrew

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffee: {
        brewedAt: '2022-02-28T09:17:57.652Z',
        litersBrewed: '1.5'
      }
    };
  }

  handleNewCoffee = (newLitres) => {
    console.log("App.js -> New coffee!!!", newLitres);
    //New coffee ready. This is:
    //litersBrewed = newLitres
    //brewAt = current datew
    this.setState({ 
      coffee: { 
        litersBrewed: newLitres,
        brewedAt: moment().toISOString()
      } 
    });
  }

  render() {
    return (
      <div className="App">
        <header></header>
        <main>

          <div id="examples">
            <h1>Examples</h1>
            <Thermos {...this.state.coffee} />

            {/* <Thermos {...coffee} className="neumorphism-card"/> */}

            <CoffeeInfo {...this.state.coffee} />

            <CoffeeButton onClick={this.handleNewCoffee}/>

            <CoffeeButton litersToBrew='1.1' onClick={this.handleNewCoffee}/>

            <CoffeeButton litersToBrew='0.5' onClick={this.handleNewCoffee}/>

            <CoffeeButton litersToBrew='3.1' onClick={this.handleNewCoffee}/>
          </div>

          <span>This is Thermos and CoffeeInfo</span>
          <section id="top-container" className="container neumorphism-card">
            <Thermos {...this.state.coffee} />
            <CoffeeInfo {...this.state.coffee} />
          </section>

          <span>This is Thermos and CoffeeButtons (individual components)</span>
          <section id="prepare-coffee-container" className="container neumorphism-card">
            <Thermos {...this.state.coffee} />

            <div className="flex-columns">
              <CoffeeButton litersToBrew='2.1' onClick={this.handleNewCoffee}/>

              <CoffeeButton litersToBrew='1.1' onClick={this.handleNewCoffee}/>

              <CoffeeButton litersToBrew='0.5' onClick={this.handleNewCoffee}/>
            </div>

          </section>


          <span>This is CoffeeControl (composition: Thermos and CoffeeButton(s)))</span>
          <section>
            <CoffeeControl {...this.state.coffee} onChange={this.handleNewCoffee} />
          </section>

        </main>
      </div>
    );
  }
}

export default App;
