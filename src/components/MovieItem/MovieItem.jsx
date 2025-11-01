import styles from './MovieItem.module.css';
import { useState } from 'react';
// import Picture from '../SvgPicture/SvgPicture';

function MovieItem({path, movie}) {

  const [count, setCount] = useState(0);

  const counter  = (counter) => {
    counter = 0;
    setCount(counter += 1);
  }

  return (
      <div className={styles['movie_item']}> 

        <img src={path} className={styles['movie-pic']}/>

        <div className={styles['star_container']}>
        <img src='/star.svg' className={styles['star_pic']}/>
        <h2 className={styles['counter_star']} onClick={counter}>{count}</h2>
        </div>

        <h2 className={styles['name_movie']}>{movie}</h2>
        
        <div className={styles['floor_container']}>
          <img src='/like.svg' className={styles['like_svg']}/>
          <h2 className={styles['add_fav']}>В избранное</h2>
        </div>

      </div>
  )
};

export default MovieItem;