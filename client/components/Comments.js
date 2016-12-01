import React from 'react';

const Comment = React.createClass({
  render() {

    var comments = this.props.comments.map((comment, index) => (
        <div className='comment' key={index}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button className='remove-comment'>&times;</button>
          </p>
        </div>
      )
    );

    return (
      <div className='comments'>
        {comments}
        <form ref='commentForm' className='comment-form'>
          <input type='text' ref='author' placeholder='author'/>
          <input type='text' ref='comment' placeholder='comment'/>
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
});

export default Comment;
