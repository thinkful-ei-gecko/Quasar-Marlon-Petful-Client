import React from 'react';

export default class PetDescription extends React.Component {

  state = {
    pets: this.props.pets,
    currentpet: this.props.pets
  }

  render() {

    return (
      <>
      <button className='next-button'>next</button>
        <img alt=''>
        </img>
        <div className='pet-details'>
          <ul>
            <li>
              Name: 'sdfsdf'
            </li>
            <li>
              Sex: 'sdfsdf'
            </li>
            <li>
              Age: 'sdfsdf'
            </li>
            <li>
              Breed: 'sdfsdf'
            </li>
            <li>
              Story: 'sdfsdf'
            </li>
          </ul>
        </div>
      </>
    );
  };
};
