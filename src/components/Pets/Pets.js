import React from 'react';
import './Pets.css';
import { Link } from 'react-router-dom';

export default class Pets extends React.Component {

  generatePetCarousel() {
    let cats = [
      'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg',
      'https://www.sciencenewsforstudents.org/sites/default/files/scald-image/860_cat_names.png'
    ]

    let catNav = cats.map((cat, index) => {
      return(
        <li id='index'>
          <Link to='/pets'>
          <img className='cat' src={cat}/>
          </Link>
        </li>
      )
    })
 
    return catNav;

  }
  render() {
    return(
      <div className='pets'>
        <nav className='petsNav'>
          <ul>
            {this.generatePetCarousel()}
          </ul>
        </nav>
        <img src='https://cbsnews1.cbsistatic.com/hub/i/2016/03/23/38e32f54-b910-4612-8852-be9e0fbdbf73/cat-istock.jpg' alt='Starry eyed cat'/>
      </div>
    )
  }
}