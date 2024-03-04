import './styles.scss';

const Search = () => {
  return (
    <div className="btn-header search">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='search-icon'>
        <path d="M16.5 16.8095C18.0396 15.3514 19 13.2879 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C13.1304 19 15.0663 18.1672 16.5 16.8095ZM16.5 16.8095L22 22.3095" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <p className="label-btn">Search</p>
    </div>
  );
}

export default Search;