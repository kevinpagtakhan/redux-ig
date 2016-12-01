import React from 'react';

const Comment = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    const postId = this.props.params.postId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.author.value = '';
    this.refs.comment.value = '';
  },
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
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit}>
          <input type='text' ref='author' placeholder='author'/>
          <input type='text' ref='comment' placeholder='comment'/>
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
});

export default Comment;
