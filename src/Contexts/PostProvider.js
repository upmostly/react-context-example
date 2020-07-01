import React, { useState, useEffect } from 'react';
import {deletePostFromDatabaseWithId, getPostsFromDatabase, getPostsFromDatabaseForUserWithId} from '../API';

export const PostContext = React.createContext({});

const PostProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  async function getAllPosts() {
    setIsLoading(true);
    const postsResponse = await getPostsFromDatabase();
    setPosts(postsResponse);
    setIsLoading(false);
  }

  async function getPostsForUserWithId(userId) {
    setIsLoading(true);
    const postsResponse = await getPostsFromDatabaseForUserWithId(userId);
    setPosts(postsResponse);
    setIsLoading(false);
  }

  async function deletePostWithId(postId) {
    setIsLoading(true);
    await deletePostFromDatabaseWithId(postId);
    setIsLoading(false);
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{
        isLoading,
        posts,
        getPostsForUserWithId,
        deletePostWithId
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
