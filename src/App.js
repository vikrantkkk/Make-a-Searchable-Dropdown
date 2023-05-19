import React from 'react';
import './style.css';
import Select from 'react-select';

export default function App() {
  const options = [
    { value: 'mango', label: 'Mango' },
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
  ];
  return (
    <div>
      <Select options={options} isSearchable={true} className="Select" />
    </div>
  );
}

