import React from 'react';

const PostListItem = ({ id, body, title, userId, handleDeleteClicked }) => {
  return (
    <>
      <div className="list-group-item">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{title}</h5>
          <small>Id: {id}</small>
        </div>
        <p className="mb-1">{body}</p>
        <div className="d-flex align-items-center">
          <button onClick={() => handleDeleteClicked(id)} type="button" className="btn btn-danger btn-sm mr-2">Delete</button>
          <small>User Id: {userId}</small>
        </div>
      </div>
    </>
  );
};

export default PostListItem;
