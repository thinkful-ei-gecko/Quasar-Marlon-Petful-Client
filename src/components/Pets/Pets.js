import React from 'react';
import './Pets.css';
import { Link } from 'react-router-dom';

export default class Pets extends React.Component {

    cats = [
      'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg',
      'https://www.sciencenewsforstudents.org/sites/default/files/scald-image/860_cat_names.png'
    ]

    catNav = this.cats.map((cat, index) => {
      return(
        <li id='index'>
        <div className='petPortrait'>
          <Link to='/pets'>
          <img className='cat' src={cat}/>
          </Link>
        </div>
        </li>
      )
    })

    dogs = [
      'https://i.ytimg.com/vi/BDxx1TnWTX0/maxresdefault.jpg',
      'https://cdn.theatlantic.com/assets/media/img/mt/2019/07/GettyImages_138965532/lead_720_405.jpg?mod=1563813032',
      'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13002253/GettyImages-521536928-_1_.jpg',
    ];
    dogNav = this.dogs.map((dog, index) => {
      return(
        <li id='index'>
        <div className='petPortrait'>
          <Link to='/pets'>
          <img className='dog' src={dog}/>
          </Link>
        </div>
        </li>
      )
    })
  render() {
    return(
      <div className='pets'>
        <nav className='petsNav'>
          <ul>
            {this.catNav}
          </ul>
        </nav>
        <nav className='petsNav'>
          <ul>
            {this.dogNav}
          </ul>
        </nav>
        <div className='mainCat'>
        <img src='https://cbsnews1.cbsistatic.com/hub/i/2016/03/23/38e32f54-b910-4612-8852-be9e0fbdbf73/cat-istock.jpg' alt='Starry eyed cat'/>
        </div>
        <div className='mainDog'>
        <img src='https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782' alt='Dog'/>
        </div>
      </div>
    )
  }
}