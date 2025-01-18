import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import './Header.css';
import Card from './Card'; 
import Layout from './Layout'; 

const Header = () => {
  const [data, setData] = useState([]);  
  const [search, setSearch] = useState('');  

  const handleInput = (event) => {
    setSearch(event.target.value); 
  }

  const food = async () => {
    try {
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const jsonData = await get.json();
      setData(jsonData.meals || []);  
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <h3>Recipe Book</h3>
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search recipes..."
              className="search-input"
              onChange={handleInput} 
            />
            <button className="search-icon" onClick={food}> 
              <CiSearch size={20} />
            </button>
          </div>
        </nav>
        <Layout/>
      </header>
      <Card details={data}/>  {}
    </>
  );
};

export default Header;
