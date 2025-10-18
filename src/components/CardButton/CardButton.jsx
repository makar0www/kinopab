import './CardButton.css';

function CardButton({ children }) {
  return (
      <div className='card-button'>
          {children}
      </div>
  )
};

export default CardButton;
