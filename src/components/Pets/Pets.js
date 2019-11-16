import React from 'react';
import './Pets.css';
import { Link } from 'react-router-dom';
import PetDescription from '../PetDescription/PetDescription';

export default class Pets extends React.Component {
  state = {
    adoptedPets: [],
  }
  componentDidMount() {
    this.setState({
      adoptedPets: [...this.props.adoptedDogs, ...this.props.adoptedCats]
    })
  }

  renderAdoptedPets() {
    let adoptedPets = this.state.adoptedPets.map((pet, index) => {
      return(
        <li key={index} className='adoptedPet'>
          <img src={pet.imageURL}/>
        </li>
      )
    })
    return adoptedPets;
  }

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
        <ul className='adoptedPets'>
          {this.renderAdoptedPets()}
          <h3>Test</h3>
        </ul>
        </div>
   )
  }
}

