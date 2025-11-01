import styles from './CardList.module.css';
import CardButton from '../../components/CardButton/CardButton';
import MovieItem from '../../components/MovieItem/MovieItem';

function CardList({items}) {

  if (items.length === 0) {
      return (
        <div className={styles['not_found_container']}>
          <p className={styles['not_found_big']}>Упс... Ничего не найдено</p>
          <p className={styles['not_found_small']}>Попробуйте изменить запрос или ввести более точное название фильма</p>
        </div>
      )
  }

  return (
  <div className={styles['card-list']}>
  {items.map(el => (
    <CardButton key={el.id}>
      <MovieItem 
        path={el.path}
        movie={el.movie}
      />
    </CardButton>
  ))}
  </div>
);
};

export default CardList;