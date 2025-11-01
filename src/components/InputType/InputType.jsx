import styles from './InputType.module.css';
import Picture from '../SvgPicture/SvgPicture';
import { useState } from 'react';
import Button from '../Button/Button';

function InputType({placeholder, path, name, textButton, onSubmit}) {
  
  const [inputData, setInputData] = useState('');


  const handleChange = (event) => {
      setInputData(event.target.value);
      // console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({name: inputData});
  }

  return (
      <form className={styles['input-wrapper']} onSubmit={handleSubmit}>
      {path && <Picture path={path}/>}
      <input type='text' placeholder={placeholder} className={styles.input}
      name={name} value={inputData}  onChange={handleChange}/>
      <Button text={textButton}/>
      </form>
  )
};

export default InputType;