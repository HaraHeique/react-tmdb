import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt, BiSearchAlt2 } from 'react-icons/bi';

import './Navbar.css';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    if (!search) return;

    setSearch('');
    navigate(`/search?q=${search}`);
  };

  return (
    <div id='navbar'>
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </h2>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder='Busque um filme' 
          onChange={(event) => setSearch(event.target.value)}
          value={search} />
        <button type='submit'>
          <BiSearchAlt />
        </button>
      </form>
    </div>
  );
};

export default Navbar;