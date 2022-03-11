

const Advice = (props) => {
  const { adviceId, advice } = props;
  return (
    <div className='advice'>
      <p className="headerText">ADVICE #{ adviceId }</p>
      <h1 className="bodyText">"{ advice }"</h1>
    </div>
  )
}

export default Advice;