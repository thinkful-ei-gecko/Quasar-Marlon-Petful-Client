import React from 'react';
import './Pets.css';
import { Link } from 'react-router-dom';
import PetDescription from '../PetDescription/PetDescription';


export default class Pets extends React.Component {
  state = {
    adoptedCats: [],
    adoptedDogs: []
  }
  
  componentDidMount() {
    this.setState({
      adoptedCats: this.props.adoptedCats,
      adoptedDogs: this.props.adoptedDogs
    })
  }
  render() {
    console.log(this.props)
    return(
      <div className='pets'>
        <PetDescription className='cat-desc' pets={this.props.cats} ></PetDescription>
        <PetDescription className='dogs-desc' pets={this.props.dogs}></PetDescription>

      </div>
    )
  }
}