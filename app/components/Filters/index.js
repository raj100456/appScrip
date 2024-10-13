import React, { useState } from 'react';
import './index.css';
import ArrowDownIcon from '../Common/Icons/ArrowDownIcon';
import ArrowUpIcon from '../Common/Icons/ArrowUpIcon';

// FilterSection Component
const FilterSection = ({ section, title, options, selectedOptions, handleOptionChange, handleAllClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="filter-section">
   
      <div 
        className="section-header" 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <h4>{title}</h4>
        <span>{!isExpanded ? 
        <ArrowDownIcon />
        : <ArrowUpIcon />
        }</span>
      </div>

      
      {isExpanded && (
        <div className="section-content">
          <div className='all' onClick={() => handleAllClick(section, true)}>All</div>
          <div className='unselect-all' onClick={() => handleAllClick(section, false)}>Unselect All</div>
          {options.map((option) => (
            <div key={option} className="checkbox-option">
              <input
                type="checkbox"
                id={option}
                name={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Main FilterLeftNav Component
const FilterLeftNav = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    ideal: [],
    occassion: [],
    fabric: [],
    segment: [],
  });

  const filterOptions = {
    ideal: ['Men', 'Women', 'Baby & Kids'],
    occassion: ['Party', 'Casual'],
    fabric: ['Cotton', 'Nylon'],
  };

  const handleOptionChange = (section, option) => {
    setSelectedFilters((prevFilters) => {
      const currentSectionOptions = prevFilters[section];
      const isSelected = currentSectionOptions.includes(option);

      return {
        ...prevFilters,
        [section]: isSelected
          ? currentSectionOptions.filter((opt) => opt !== option)
          : [...currentSectionOptions, option],
      };
    });
  };

  const handleAllClick = (section, isSelected = true) => {
    setSelectedFilters((prevFilters) => {
      return {
        ...prevFilters,
        [section]: isSelected
          ? filterOptions[section]
          : [],
      };
    });
  };



  return (
    <div className="filter-leftnav">
      <h2>Filters</h2>

      {Object.keys(filterOptions).map((section) => (
        <FilterSection
          key={section}
          title={section.charAt(0).toUpperCase() + section.slice(1)}
          options={filterOptions[section]}
          selectedOptions={selectedFilters[section]}
          handleOptionChange={(option) => handleOptionChange(section, option)}
          handleAllClick={handleAllClick}
          section={section}
        />
      ))}
    </div>
  );
};

export default FilterLeftNav;
