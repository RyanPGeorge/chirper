import React from 'react';
import './PostListPage.css';
import PostCard from '../../components/PostCard/PostCard';

function PostListPage(props) {
  return (
    <>
      <h1>Chirps</h1>
      <div className='PostListPage-grid'>
        {props.posts.map(post => (
          <PostCard
            key={post._id}
            post={post}
            handleDeletePost={props.handleDeletePost}
          />
        ))}
      </div>
    </>
  );
}

export default PostListPage;
