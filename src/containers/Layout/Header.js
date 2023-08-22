import React, { useState } from 'react';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownItemClick = () => {
    setDropdownOpen(false);
  };
  return (
    <header className="p-4 bg-red-800 text-white">
      <div className="container mx-auto flex justify-between">
        <div>Home</div>
        <div className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="focus:outline-none">
            {/* <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            </svg> */}
            Settings
          </button>
          {dropdownOpen && (
            <ul className="border py-2 absolute mt-1 w-32 bg-white text-black rounded shadow-lg">
              <li className="px-4 py-2 hover:bg-blue-100 transition-colors duration-150" onClick={handleDropdownItemClick}>Menu 1</li>
              <li className="px-4 py-2 hover:bg-blue-100 transition-colors duration-150" onClick={handleDropdownItemClick}>Menu 2</li>
              <li className="px-4 py-2 hover:bg-blue-100 transition-colors duration-150" onClick={handleDropdownItemClick}>Menu 3</li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;