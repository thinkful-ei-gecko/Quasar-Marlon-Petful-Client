import React from 'react';
import './PetDescription.css';

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

  render() {
    return (
      <>
        <button className='prev-button' onClick={() => this.goToPreviousPet()}>prev</button>
        <button className='next-button' onClick={() => this.goToNextPet()}>next</button>
        <img
          className='pet-image'
          src={this.props.pets[this.state.currentPetIndex].imageURL}
          alt={this.props.pets[this.state.currentPetIndex].imageDescription}
        />
        <div className='pet-details'>
          <ul>
            <li>Name: {this.props.pets[this.state.currentPetIndex].name}</li>
            <li>Sex: {this.props.pets[this.state.currentPetIndex].sex}</li>
            <li>Age: {this.props.pets[this.state.currentPetIndex].age}</li>
            <li>Breed: {this.props.pets[this.state.currentPetIndex].breed}</li>
            <li>Story: {this.props.pets[this.state.currentPetIndex].story}</li>
          </ul>
        </div>
      </>
    );
  }
}
