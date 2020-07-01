import React from 'react';

const Spinner = () => {
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center align-items-center">
        <div className="spinner-grow text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
