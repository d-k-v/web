import "./nav-bar.css";
import React from "react";
// import Search from "@mui/icons-material/Search";

function NavBar(props) {
  return (
    <React.Fragment>
      <div className="nav-bar">
        <div className="nav-logo">Logo</div>
        <div className="nav-main">
          <div className="nav-options">
            <div className="nav-link">Home</div>
            <div className="nav-link">Products</div>
            <div className="nav-link">About</div>
            <div>
              <div className="search-container">
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search"
                ></input>
                {/* < */}
                {/* <img src=""/> */}
                {/* <Icon baseClassName="search">search</Icon> */}
                {/* <button className="search-button">search</button> */}
              </div>
            </div>
          </div>
          <div className="nav-menu">Menu</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
