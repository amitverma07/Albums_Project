import React from 'react'

//To dispaly the text in header
function Header() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-info justify-content-center py-3">
        <h1 className="font-weight-bold">Ever Voted For Your Favourite Album? Vote Now...</h1>
      </nav>
    </React.Fragment>
  );
}

export default Header;