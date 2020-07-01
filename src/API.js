// The interface used to communicate to the JSONPlaceholder API

export const getPostsFromDatabase = async () => await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();

export const getPostsFromDatabaseForUserWithId = async userId => await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)).json();

export const deletePostFromDatabaseWithId = async postId => await (await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { method: 'DELETE'})).json();
