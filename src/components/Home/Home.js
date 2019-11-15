import React from 'react';
import './Home.css'

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <h2>Adopt a cat, dog, or both</h2>
        <p>Sign up to adopt a pet on a first-come, first-served basis. 
          When it's your time to choose, you can choose to adopt only the 
          dog and/or cat that's at the top of the queue.
        </p>
        <img src='https://3r9lyt1d8og217dtmn2955gi-wpengine.netdna-ssl.com/wp-content/uploads/2016/02/Cats-and-Dogs-2.jpg'></img>
      </div>
    )
  }
}