import React from 'react';
import './Pets.css';
import { Link } from 'react-router-dom';
import PetDescription from '../PetDescription/PetDescription';
import ApiService from '../../api-service';
import PetContext from '../../PetContext';

export default class Pets extends React.Component {
  static contextType = PetContext;
  componentDidMount() {
    ApiService.getDogs()
    .then(this.context.updateDogs)

    ApiService.getCats()
    .then(this.context.updateCats)

    ApiService.getPeople()
    .then(this.context.updatePeople)
  }

  // renderAdoptedPets() {
  //   console.log(this.props)
  //   let adoptedPets = this.state.adoptedPets.map((pet, index) => {
  //     return(
  //       <li key={index} className='adoptedPet'>
  //         <img src={pet.imageURL}/>
  //       </li>
  //     )
  //   })
  //   return adoptedPets;
  // }

  render() {
    console.log(this.context.dogs)
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
          <h3>Test</h3>
        </ul>
        </div>
   )
  }
}

