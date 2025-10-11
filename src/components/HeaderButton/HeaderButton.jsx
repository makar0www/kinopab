import './HeaderButton.css';
import Picture from '../Picture/Picture';

function HeaderButton({text, path, link}) {

  return (
      <a href={link} target="_blank" rel="noopener noreferrer" className='header-button headerButton-font a'>
        {text}
        {path && <Picture path={path}/>}
      </a>
  )
};

export default HeaderButton;