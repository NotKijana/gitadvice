import SearchIcon from '../assets/icon-search.svg';

const SearchAdvice = (props) => {
    const { searchAdvice } = props;

  return (
    <form  autocomplete="off" id='searchForm' onSubmit={e => searchAdvice(e)}>
        <input className='search' placeholder='1-224'
        type="number" min='1' max='224' name="search" id="search" />
        <button className='button' type='submit' >
            <img src={ SearchIcon } alt="Search Icon" className='button icon' />
        </button>
    </form>
  )
}

export default SearchAdvice;