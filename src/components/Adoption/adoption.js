import React from 'react';
import Form from '../Form/Form';
import Pets from '../Pets/Pets';
import './Adoption.css';
import PetContext from '../../PetContext';
import ApiService from '../../api-service';

export default class Adoption extends React.Component {
  static contextType = PetContext;

  
  componentDidMount() {
    ApiService.getDogs()
    .then(this.context.updateDogs)

    ApiService.getCats()
    .then(this.context.updateCats)

    ApiService.getPeople()
    .then(this.context.updatePeople)
  }

  render() {
    console.log(this.context.dogs);
    return (
      <div className='petContainer'>
        <Form></Form>
        <Pets
          cats={this.context.cats}
          dogs={this.context.dogs}
        ></Pets>
      </div>
    );
  }
}
