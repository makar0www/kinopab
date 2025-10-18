import './SvgPicture.css';

function SvgPicture({path, alt}) {
  return (
        <img src={path} alt={alt} className='picture'/>
  )
};

export default SvgPicture;