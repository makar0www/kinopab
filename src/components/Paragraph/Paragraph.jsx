import styles from './Paragraph.module.css';
import cn from 'classnames';

function Paragraph({text}) {
  return (
      <div>
        <h3 className={cn(styles.paragraph, styles.container)}>{text}</h3>
      </div>
  )
};

export default Paragraph;
