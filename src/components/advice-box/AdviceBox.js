import { useState, useEffect } from 'react';
import Dice from '../../assets/icon-dice.svg';
import SearchIcon from '../../assets/icon-search.svg';
import Divider from "../../assets/pattern-divider-desktop.svg";
const axios = require('axios');

const AdviceBox = () => {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('');

  const getAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then(response => {
      setAdvice(response.data.slip.advice);
      setAdviceId(response.data.slip.id);
      console.log(advice)
    })
    .catch(error => {
      setAdvice(error.data.message.text);
      setAdviceId(error.data.message.type);
    });
  }

  // Max Number 224
  const searchAdvice = userInput => {
    userInput.preventDefault();
    
    axios.get(`https://api.adviceslip.com/advice/${userInput.target.search.value}`)
    .then(response => {
      setAdvice(response.data.slip.advice);
      setAdviceId(response.data.slip.id);
      console.log(advice)
    })
    .catch(error => {
      setAdvice(error.data.message.text);
      setAdviceId(error.data.message.type);
    });
  }

  useEffect(() => {
    getAdvice();
  }, [])

  return (
    <div className='box'>
      <form  autocomplete="off" id='searchForm' onSubmit={e => searchAdvice(e)}>
        
        <input className='search' 
        placeholder='1-224'
        type="number" min='1' max='224' 
        name="search" id="search" 
        />

        <button className='button' type='submit' >
            <img src={ SearchIcon } alt="Search Icon" className='button icon' />
        </button>

      </form>

      <div className='advice'>
        <p className="headerText">ADVICE #{ adviceId }</p>
        <h1 className="bodyText">"{ advice }"</h1>
      </div>

      <img className='divider' src={Divider} alt="Divider" />

      <button className='refresh' onClick={() => getAdvice()}>
        <img src={Dice} alt='Dice Icon' />  
      </button>
    </div>
  )
}

export default AdviceBox;