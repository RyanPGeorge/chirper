import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post, handleDeletePost }) {
  return (
    <div className='panel panel-default'>
      <div className='panel-heading'>
        <h3 className='panel-title'>{post.user}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>*chirp*</dt>
          <dd>{post.body}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        {/* 
          The following is another approach to provide 
          data to a different route that's different
          from the Star Wars lab's solution code.
          The state object can be accessed in the new
          route via the location.state object
        */}
        <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: { post }
          }}
        >
          EDIT
        </Link>
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={() => handleDeletePost(post._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default PostCard;
