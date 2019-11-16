import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Adoption from './components/Adoption/adoption';
import ApiService from './api-service';

export default class App extends React.Component {
  state = {
    cats: [],
    dogs: [],
    people: [],
    adoptedDogs: [],
    adoptedCats: [],
  };

  componentDidMount() {
    console.log('Test');
    this.updateCats();
    this.updateDogs();
    this.updatePeople();
  }

  updatePeople = () => {
    ApiService.getPeople().then(res =>
      this.setState({
        people: res
      })
    );
  };

  updateCats = () => {
    console.log('updating cats');
    ApiService.getCats().then(res =>
      this.setState({
        cats: res
      })
    );
  };

  updateDogs = () => {
    ApiService.getDogs().then(res =>
      this.setState({
        dogs: res
      })
    );
  };

  filterAdoptedDogs = () => {
    let adoptedDogs = this.state.dogs.filter(dog => dog.adopter !== null);
    return adoptedDogs;
  }

  filterAdoptedCats = () => {
    let adoptedCats = this.state.cats.filter(cat => cat.adopter !== null);
    return adoptedCats;
  }



  render() {
    console.log(this.state.dogs)
    console.log(this.state.cats)
    console.log(this.filterAdoptedCats())
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Welcome to Petful</h1>
          <h2>Your FIFO adoption agency</h2>
        </header>
        <NavBar />
        <main>
          <Switch>
            <Route exact path='/' render={props => <Home {...props} />} />
            <Route
              exact
              path='/adoption'
              render={props => (
                <Adoption
                  {...props}
                  cats={this.state.cats}
                  dogs={this.state.dogs}
                  updateCats={() => this.updateCats()}
                  updateDogs={() => this.updateDogs()}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}
