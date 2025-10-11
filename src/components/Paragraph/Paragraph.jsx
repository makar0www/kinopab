import './Paragraph.css';

function Paragraph({text}) {
  return (
      <div>
        <h3 className='paragraph container'>{text}</h3>
      </div>
  )
};

export default Paragraph;
