import styles from './Headline.module.css';

function Headline({text}) {
  return (
        <h1 className={styles.headline}>{text}</h1>
  )
};

export default Headline;