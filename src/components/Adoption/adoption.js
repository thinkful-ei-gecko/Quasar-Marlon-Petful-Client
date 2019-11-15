import React from 'react';
import Form from '../Form/Form';
import Pets from '../Pets/Pets';

export default class Adoption extends React.Component {
  render() {
    return (
      <>
        { <Form></Form> }
        <Pets></Pets>
      </>
    );
  }
}
