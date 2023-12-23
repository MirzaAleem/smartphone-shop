import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left left-1">
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-violet-900 hover:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          id="dropdown-menu"
          onClick={toggleDropdown}
        >

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-menu"
        >
          <div className="py-1" role="none">
            {/* Dropdown items */}
            <a
              href="Login"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-900"
              role="menuitem"
              onClick={closeDropdown}
            >
              Login
            </a>
            <a
              href="Settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-900"
              role="menuitem"
              onClick={closeDropdown}
            >
              Settings
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
