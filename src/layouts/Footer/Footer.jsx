import styles from './Footer.module.css';

function Footer({children}) {
  return (
      <div className={styles.footer}>
        {children}
      </div>
  )
};

export default Footer;