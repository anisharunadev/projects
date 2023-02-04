import React, { useRef, useState } from "react";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef();

  return (
    <header>
      <div className="movie__header">
        <div className="nav__left">Anish Moive App</div>
        <div className="nav__right">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
                  >
            <input
              type="search"
                          name="searchInput"
                          placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              ref={searchRef}
                      />
            <input type="submit" name="submit" value="Search"/> 
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
