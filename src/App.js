import React from 'react';
import './App.css';
import reactLogo from './Assets/react-logo.png';
import PostList from './Components/PostList';
import PostProvider, {PostContext} from './Contexts/PostProvider';
import UserSelectDropdown from './Components/UserSelectDropdown';
import PostListItem from './Components/PostListItem';
import Spinner from './Components/Spinner';

function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 d-flex justify-content-center">
          <img src={reactLogo} alt="React Logo" style={{ width: '200px' }} />
        </div>
        <div className="col-12">
          <PostProvider>
            <PostContext.Consumer>
              {({ isLoading, posts, getPostsForUserWithId, deletePostWithId }) => (
                <>
                  <UserSelectDropdown handleChange={userId => getPostsForUserWithId(userId)} />
                  {isLoading ? <Spinner /> : (
                    <PostList>
                      {posts.map(post => (
                        <PostListItem
                          {...post}
                          handleDeleteClicked={deletePostWithId}
                        />
                      ))}
                    </PostList>
                  )}
                </>
              )}
            </PostContext.Consumer>
          </PostProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
