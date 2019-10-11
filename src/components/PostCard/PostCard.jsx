import React from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

function PostCard({ post, handleDeletePost }) {
  return (
    <div className='panel panel-default'>
      <div className='panel-heading'>
        <h5 className='panel-title'>{post.user.name}</h5>
      </div>
      <div className='panel-body'>
        <p>{post.body}</p>
      </div>
      <div className='panel-footer'>
        {/* 
            The following is another approach to provide 
            data to a different route that's different
            from the Star Wars lab's solution code.
            The state object can be accessed in the new
            route via the location.state object
          */}
        {userService.getUser() && userService.getUser()._id === post.user._id && (
          <div>
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
        )}
      </div>
    </div>
  );
}

export default PostCard;
