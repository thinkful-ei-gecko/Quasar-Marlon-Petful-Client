import React from 'react';
import './PetDescription.css';
import ApiService from '../../api-service';

export default class PetDescription extends React.Component {
  state = {
    currentPetIndex: 0
  };

  goToNextPet = () => {
    let petIndex = this.state.currentPetIndex;
    if (petIndex < this.props.pets.length - 1) {
      this.setState({
        currentPetIndex: ++petIndex
      });
    }
  };

  goToPreviousPet = () => {
    let petIndex = this.state.currentPetIndex;
    if (petIndex > 0) {
      this.setState({
        currentPetIndex: --petIndex
      });
    }
  };

  adoptAPet = () => {
    if (this.props.petType === 'cat' && this.props.people !== []) {
      ApiService.adoptCat().then(() => this.props.updateCats());
    }
    if (this.props.petType === 'dog' && this.props.people !== []) {
      ApiService.adoptDog().then(() => this.props.updateDogs());
    } else {
      alert('Please fill out your name to adopt a pet');
    }
  };

  render() {
    let pets = this.props.pets.length === 0 ? [''] : this.props.pets;
    console.log(this.props.people);
    let adoptButton =
      this.state.currentPetIndex === 0 ? (
        <button
          className='adopt-button'
          disabeled={
            pets[this.state.currentPetIndex].adopter == null ? 1 : 0
          }
          onClick={() => this.adoptAPet()}
        >
          adopt me
        </button>
      ) : (
        <button className='adopt-button' disabled>
          {pets[this.state.currentPetIndex].adopter == null
            ? 'waiting to be adopted'
            : `I'm reserved by
          ${pets[this.state.currentPetIndex].adopter}`}
        </button>
      );

    return (
      <>
        <button className='prev-button' onClick={() => this.goToPreviousPet()}>
          prev
        </button>
        <button className='next-button' onClick={() => this.goToNextPet()}>
          next
        </button>
        <img
          className='pet-image'
          src={pets[this.state.currentPetIndex].imageURL}
          alt={pets[this.state.currentPetIndex].imageDescription}
        />
        <div className='pet-details'>
          <ul>
            <li>Name: {pets[this.state.currentPetIndex].name}</li>
            <li>Sex: {pets[this.state.currentPetIndex].sex}</li>
            <li>Age: {pets[this.state.currentPetIndex].age}</li>
            <li>Breed: {pets[this.state.currentPetIndex].breed}</li>
            <li>Story: {pets[this.state.currentPetIndex].story}</li>
          </ul>
          {adoptButton}
        </div>
      </>
    );
  }
}
