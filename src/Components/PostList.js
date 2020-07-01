import React from 'react';

const PostList = ({ children }) => {
  return (
    <>
      <div className="list-group pb-5">
        {children}
      </div>
    </>
  );
};

export default PostList;
