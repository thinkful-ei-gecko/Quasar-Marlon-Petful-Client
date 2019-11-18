import React from 'react';
import Form from '../Form/Form';
import Pets from '../Pets/Pets';
import './Adoption.css'

export default class Adoption extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className='petContainer'>
        <Form updatePeople={() => this.props.updatePeople()}></Form>
        <Pets
          cats={this.props.cats}
          dogs={this.props.dogs}
          people={this.props.people}
          updateCats={() => this.props.updateCats()}
          updateDogs={() => this.props.updateDogs()}
          updatePeople={() => this.props.updatePeople()}
          adoptedDogs={this.props.adoptedDogs}
          adoptedCats={this.props.adoptedCats}
        ></Pets>
      </div>
    );
  }
}
