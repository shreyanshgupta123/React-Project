import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  const [searchVisible, setSearchVisible] = useState(false);

  function openSearch() {
    setSearchVisible(true);
  }
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
              <img src='https://www.fireboltt.com/cdn/shop/files/Background_150x.png?v=1620478900' alt="..." style={{width:'150px'}} />
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <ul className="nav-list" style={{ display: 'flex', justifyContent: 'center' }}>
                  <ul className="nav-list" style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none' }}>
  <li className="nav-item">
  <Link to='/'> <h6 className="text-center" style={{ marginLeft: '10px' }}>Home</h6> </Link>  
  </li>
  <li className="nav-item">
    <Link to='/Mobprod'><h6 className="text-center" style={{ marginLeft: '10px' }}>Product</h6></Link> 
  </li>
  <li className="nav-item">
  <Link to='/cart'><h6 className="text-center" style={{ marginLeft: '10px' }}>Cart</h6></Link>  
  </li>
</ul>
</ul>
                  </ul>
                  <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search" style={{
              display: searchVisible ? "block" : "none"
            }} />
            <i className="fa-solid fa-magnifying-glass" onClick={openSearch}></i>
            <i className="fa-solid fa-bag-shopping" style={{ marginLeft: '10px' }}></i>
            <i className="fa-solid fa-user" style={{ marginLeft: '10px' }}></i>
          </form>
              </div>
          </div>
      </nav>
  );
}

export default Navbar;
