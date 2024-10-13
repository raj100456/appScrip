import React, { useState } from 'react';
import './index.css';
import ArrowDownIcon from '../Icons/ArrowDownIcon';
import ArrowUpIcon from '../Icons/ArrowUpIcon';
import TickIcon from '../Icons/Tickicon';

const CustomDropdown = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('Recommended');
  const [isOpen, setIsOpen] = useState(false);

  // Options for the dropdown
  const options = ['RECOMMENDED', 'NEWEST FIRST', 'POPULAR', 'PRICE: HIGH TO LOW', 'PRICE: LOW TO HIGH'];

  // Handle option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className="dropdown">
      <button
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
        <span className="arrow">
          {!isOpen ? 
          <ArrowDownIcon />
           : <ArrowUpIcon />}
        </span>
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option}
              className={`dropdown-item ${selectedOption === option ? 'active' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              <span className='tick-icon'>{selectedOption === option ? <TickIcon /> : '' }</span>
              <span>{option}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
