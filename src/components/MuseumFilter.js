import React from 'react';

const MuseumFilter = props => {
  return (
    <div>
      <select className="mselect" onChange={event => props.handleMuseumChange(event)}>
        <option value="All">All Art</option>
        {props.museums.map(museum => {
          return (
            <option key={museum.id} value={museum.name}>
              {museum.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MuseumFilter;
