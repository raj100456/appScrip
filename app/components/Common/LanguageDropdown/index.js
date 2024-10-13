'use client'
import React, { useState } from 'react';
import './index.css';
import ArrowDownIcon from '../Icons/ArrowDownIcon';
import ArrowUpIcon from '../Icons/ArrowUpIcon';

const CustomDropdown = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('ENG');
  const [isOpen, setIsOpen] = useState(false);

  // Options for the dropdown
  const options = ['ENG', 'FR', 'GE'];

  // Handle option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className="language-dropdown">
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
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
