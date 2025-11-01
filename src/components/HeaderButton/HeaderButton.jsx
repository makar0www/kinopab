import styles from './HeaderButton.module.css';
import cn from 'classnames';
import Picture from '../SvgPicture/SvgPicture';


function HeaderButton({text, path, link, onClick}) {

  return (
      <a href={link} target="_blank" rel="noopener noreferrer" onClick={onClick} 
      className={cn(styles['header-button'], styles['headerButton-font'], styles.a)}>
        {text}
        {path && <Picture path={path}/>}
      </a>
  )
};

export default HeaderButton;