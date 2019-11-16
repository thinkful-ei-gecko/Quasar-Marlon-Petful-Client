import React from 'react';
import './Pets.css';
import { Link } from 'react-router-dom';
import PetDescription from '../PetDescription/PetDescription';

export default class Pets extends React.Component {
  render() {
    return (
      <div className='pets'>
        <PetDescription
          className='cat-desc'
          pets={this.props.cats}
          petType='cat'
          updateCats={this.updateCats}
        ></PetDescription>
        <PetDescription
          className='dogs-desc'
          pets={this.props.dogs}
          petType='dog'
          updateDogs={this.updateDogs}
        ></PetDescription>
      </div>
    );
  }
}
