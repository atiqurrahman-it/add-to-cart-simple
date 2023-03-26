import React from 'react';
import './Header.css';
const Header = () => {
    return (
    <div className='header'>
        <nav className="navbar navbar-expand-lg">
            <div className="container ">
                <a className="navbar-brand" href="ds/">E-Shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon "></span>
                </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#ds">Home</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#s">Phone</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#s">Computer</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#s">Laptop</a>
                        </li>
                    

                    </ul>
                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-success" type="submit">AddToCart</button>
                    </form>
                </div>
          </div>
      </nav>
  </div>
 );
};

export default Header;