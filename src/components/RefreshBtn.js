import Dice from '../assets/icon-dice.svg';

const RefreshBtn = (props) => {
  return (
    <button className='refresh' onClick={() => props.getAdvice()}>
      <img src={Dice} alt='Dice Icon' />  
    </button>
  )
}

export default RefreshBtn;