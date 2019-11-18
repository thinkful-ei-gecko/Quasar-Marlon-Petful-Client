import React from 'react';
import './Pets.css';
import PetDescription from '../PetDescription/PetDescription';

export default class Pets extends React.Component {

  renderAdoptedPets() {
    let adoptedPetsArr = [...this.props.adoptedCats, ...this.props.adoptedDogs]
    let adoptedPets = adoptedPetsArr.map((pet, index) => {
      return (
        <li key={index} className="adoptedPet">
          <img src={pet.imageURL} />
        </li>
      );
    });

    
    return adoptedPets;
  }

  renderAdoptedCats() {
    let adoptedCats = this.props.adoptedCats.map((cat, index) => {
      return (
        <li key={index} className="adoptedCat">
          <img src={cat.imageURL} />
        </li>
      );
    });
    return adoptedCats;
  }


  render() {
    return (
      <div className="pets">
        <div className="pet-descriptions">
          <PetDescription
            className="cat-desc"
            pets={this.props.cats}
            petType="cat"
            updateCats={() => this.props.updateCats()}
            updatePeople={() => this.props.updatePeople()}
            people={this.props.people}></PetDescription>
          <PetDescription
            className="dogs-desc"
            pets={this.props.dogs}
            petType="dog"
            updateDogs={() => this.props.updateDogs()}
            updatePeople={() => this.props.updatePeople()}
            people={this.props.people}></PetDescription>
        </div>
        <ul className="adoptedPets">
          {this.renderAdoptedPets()}
        </ul>
      </div>
    );
  }
}
