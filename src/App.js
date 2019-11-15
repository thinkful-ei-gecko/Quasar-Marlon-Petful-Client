import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import PetDetails from './components/PetDetails/PetDetails';
import Home from './components/Home/Home';
import Pets from './components/Pets/Pets';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form';
import ApiService from './api-service';

export default class App extends React.Component {
  state = {
    cats: [],
    dogs: [],
    people: [],
  }

  componentDidMount(){
    console.log('Test')
    ApiService.getCats()
    .then(res => this.setState({
      cats: res
    }))
  }

render() {
  console.log(this.state)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Petful</h1>
        <h2>Your FIFO adoption agency</h2>
      </header>
    <NavBar />
    <main>
      <Switch>
      <Route 
      exact path='/'
      render={(props) => <Home {...props} />}
      />
      <Route 
      exact path='/pets'
      render={(props) => <Pets store={this.state} {...props} />}
      />
      <Route 
      exact path='/pets/:pet_id'
      render={(props) => <PetDetails {...props} />}
      />
      <Route 
      exact path='/adopt'
      render={(props) => <Form {...props} />}
      />
      </Switch>
    </main>
    </div>
  );
  }
}


