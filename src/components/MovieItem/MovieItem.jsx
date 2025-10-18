import './MovieItem.css';
import { useState } from 'react';
// import Picture from '../SvgPicture/SvgPicture';

function MovieItem({path, movie}) {

  const [count, setCount] = useState(0);

  const counter  = (counter) => {
    counter = 0;
    setCount(counter += 1);
  }

  return (
      <div className='movie_item'> 

        <img src={path} className='movie-pic'/>

        <div className='star_container'>
        <img src='/star.svg' className='star_pic'/>
        <h2 className='counter_star' onClick={counter}>{count}</h2>
        </div>

        <h2 className='name_movie'>{movie}</h2>
        
        <div className='floor_container'>
          <img src='/like.svg' className='like_svg'/>
          <h2 className='add_fav'>В избранное</h2>
        </div>

      </div>
  )
};

export default MovieItem;