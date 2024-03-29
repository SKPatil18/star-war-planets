import React from 'react';

const ResidentList = ({ residents }) => {
  return (
    <div className="resident-list">
      <h3>Residents:</h3>
      <ul>
        {residents.map((resident) => (
          <li key={resident.name}>
            {resident.name} - Height: {resident.height}, Mass: {resident.mass}, Gender: {resident.gender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResidentList;
