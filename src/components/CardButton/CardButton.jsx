import styles from './CardButton.module.css';

function CardButton({ children }) {
  return (
      <div className={styles['card-button']}>
          {children}
      </div>
  )
};

export default CardButton;
