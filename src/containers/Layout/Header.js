import React, { useState } from 'react';

function Header() {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const onButtonClick = (e) => {};
  return (
    <header className="p-4 bg-blue-500 text-white">
      <div className="container mx-auto flex justify-between">
        <div>Logo</div>
        <div className="flex space-x-4">
          <div className="relative" onClick={() => setDropdownOpen1(!dropdownOpen1)}>
            <button className="focus:outline-none">Menu1</button>
            {dropdownOpen1 && (
              <ul className="border py-2 absolute mt-1 w-32 bg-white text-black rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-blue-100 transition-colors duration-150" onClick={() => setDropdownOpen1(false)}>Item 1</li>
                <li className="px-4 py-2 hover:bg-blue-100 transition-colors duration-150" onClick={() => setDropdownOpen1(false)}>Item 2</li>
                <li className="px-4 py-2 hover:bg-blue-100 transition-colors duration-150" onClick={() => setDropdownOpen1(false)}>Item 3</li>
              </ul>
            )}
          </div>
          <div className="relative" onClick={() => setDropdownOpen2(!dropdownOpen2)}>
            <button className="focus:outline-none">Menu2</button>
            {dropdownOpen2 && (
              <ul className="border py-2 absolute mt-1 w-32 bg-white text-black rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-blue-100 transition-colors duration-150" onClick={() => setDropdownOpen2(false)}>Item 1</li>
                <li className="px-4 py-2 hover:bg-blue-100 transition-colors duration-150" onClick={() => setDropdownOpen2(false)}>Item 2</li>
                <li className="px-4 py-2 hover:bg-blue-100 transition-colors duration-150" onClick={() => setDropdownOpen2(false)}>Item 3</li>
              </ul>
            )}
          </div>
          <div className="relative" onClick={() => setDropdownOpen3(!dropdownOpen3)}>
            <button className="focus:outline-none">Menu3</button>
            {dropdownOpen3 && (
              <ul className="border py-2 absolute mt-1 w-32 bg-white text-black rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-blue-100 transition-colors duration-150" onClick={() => setDropdownOpen3(false)}>Item 1</li>
                <li className="px-4 py-2 hover:bg-blue-100 transition-colors duration-150" onClick={() => setDropdownOpen3(false)}>Item 2</li>
                <li className="px-4 py-2 hover:bg-blue-100 transition-colors duration-150" onClick={() => setDropdownOpen3(false)}>Item 3</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;