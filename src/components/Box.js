import { useState, useEffect } from 'react';
import RefreshBtn from "./RefreshBtn";
import Divider from "../assets/pattern-divider-desktop.svg";
import Advice from "./Advice";
const axios = require('axios');

const Box = () => {
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
      console.log(error);
    });
  }

  useEffect(() => {
    getAdvice();
  })

  return (
    <div className='box'>
      <Advice advice={advice} adviceId={adviceId} />
      <img className='divider' src={Divider} alt="Divider" />
      <RefreshBtn getAdvice={getAdvice} />
    </div>
  )
}

export default Box;