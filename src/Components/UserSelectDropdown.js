import React from 'react';

const UserSelectDropdown = ({ handleChange }) => {
  return (
    <>
      <select onChange={e => handleChange(e.target.value)} className="mb-3 custom-select custom-select-sm">
        <option disabled selected>Select a user...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </>
  );
};

export default UserSelectDropdown;
