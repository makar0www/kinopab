import styles from './HeaderButton.module.css';
import cn from 'classnames';
import Picture from '../SvgPicture/SvgPicture';


function HeaderButton({text, path, link}) {

  return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={cn(styles['header-button'], styles['headerButton-font'], styles.a)}>
        {text}
        {path && <Picture path={path}/>}
      </a>
  )
};

export default HeaderButton;