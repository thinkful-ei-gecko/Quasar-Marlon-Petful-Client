import React from 'react';
import './Pets.css';
import { Link } from 'react-router-dom';
import PetDescription from '../PetDescription/PetDescription';


export default class Pets extends React.Component {
  state = {
    adoptedPets: []
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
    console.log(this.props)
    console.log(this.state)
    return(
      <div className='pets'>
        <PetDescription className='cat-desc' pets={this.props.cats} ></PetDescription>
        <PetDescription className='dogs-desc' pets={this.props.dogs}></PetDescription>
        <ul className='adoptedPets'>
          {this.renderAdoptedPets()}
          <h3>Test</h3>
        </ul>

      </div>
    )
  }
}