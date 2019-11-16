import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Adoption from './components/Adoption/adoption';
import ApiService from './api-service';
import PetContext from './PetContext';

export default class App extends React.Component {
 static contextType = PetContext;

  componentDidMount() {
    ApiService.getDogs()
    .then(this.context.updateDogs)

    ApiService.getCats()
    .then(this.context.updateCats)

    ApiService.getPeople()
    .then(this.context.updatePeople)
  }

  // filterAdoptedDogs = () => {
  //   let adoptedDogs = this.state.dogs.filter(dog => dog.adopter !== null);
  //   return adoptedDogs;
  // }

  // filterAdoptedCats = () => {
  //   let adoptedCats = this.state.cats.filter(cat => cat.adopter !== null);
  //   return adoptedCats;
  // }



  render() {
    console.log(this.context.dogs)
    console.log(this.context.cats)
    console.log(this.context.people)
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
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}
