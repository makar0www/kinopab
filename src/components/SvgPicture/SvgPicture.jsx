import styles from './SvgPicture.module.css';

function SvgPicture({path, alt}) {
  return (
        <img src={path} alt={alt} className={styles.picture}/>
  )
};

export default SvgPicture;