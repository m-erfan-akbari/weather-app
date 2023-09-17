import "../Style/Home.css";
import Weather from "./Weather";
import { useState } from "react";

const Home = () => {
  
  const [searchName, setSearchName] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [searchCount, setSearchCount] = useState(0);
  
  const handleChangeName = e => {
    setSearchName(e.target.value);
    setIsSearch(false);
  }

  const hadnleSearch = e => {
    e.preventDefault();
    setSearchCount(searchCount + 1);
    setIsSearch(true);
  }
  
  return (
    <main>
      <form id="search-container" className="px-2 flex-wrap" onSubmit={hadnleSearch}>
        <label className="text-nowrap py-1" htmlFor="input-search-city">
          نام شهر:&nbsp;
        </label>
        <input id="input-search-city" type="text" className="form-control ms-2" onChange={handleChangeName} placeholder="تهران"/>
        <button type="submit" className="btn btn-primary d-flex align-items-center">
          جستجو
          <img id="search-icon" src="./images/search.png" className="ms-2" alt="آیکون جستجو" />
        </button>
      </form>
      {isSearch && <Weather key={searchCount} city={searchName}/>}
    </main>
  );
};

export default Home;