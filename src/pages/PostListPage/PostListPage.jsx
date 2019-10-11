import React from 'react';
import './PostListPage.css';
import PostCard from '../../components/PostCard/PostCard';

function PostListPage(props) {
  console.log('post list', props);
  return (
    <>
      <h1>Chirps</h1>
      <div className='PostListPage-grid'>
        {props.posts.map(post => (
          <PostCard
            key={post._id}
            post={post}
            name={post.user.name}
            handleDeletePost={props.handleDeletePost}
            handleUpdatePost={props.handleUpdatePost}
          />
        ))}
      </div>
    </>
  );
}

export default PostListPage;
