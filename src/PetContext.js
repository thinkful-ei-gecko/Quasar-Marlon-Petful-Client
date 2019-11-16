import React from 'react';

const PetContext = React.createContext({
  dogs: [],
  cats: [],
  peope: [],
  adoptedDogs: [],
  adoptedCats: [],
  updateDogs: () => {},
  updateCats: () => {},
});

export default PetContext;

export class PetContextProvider extends React.Component {
  state = {
    dogs: [],
    cats: [],
    adoptedDogs: [],
    adoptedCats: [],
  }

  updateDogs = (updatedDogs) => {
    this.setState({
      dogs: updatedDogs,
    })
  }

  updateCats = (updatedCats) => {
    this.setState({
      cats: updatedCats,
    })
  }

  updatePeople = (updatedPeople) => {
    this.setState({
      people: updatedPeople
    })
  }

  render() {
    const value = {
      dogs: this.state.dogs,
      cats: this.state.cats,
      updateDogs: this.updateDogs,
      updateCats: this.updateCats,
      updatePeople: this.updatePeople,
    }

  return (
    <PetContext.Provider value={value}>
      {this.props.children}
    </PetContext.Provider>
    )
  }
}