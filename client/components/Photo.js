import React from 'react';
import { Link } from 'react-router';

import PhotoGridItem from './PhotoGridItem';
import Comments from './Comments';

const Photo = React.createClass({
  render() {
    const index = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    const post = this.props.posts[index];

    const comments = this.props.comments[this.props.params.postId] || [];

    return (
      <div className='single-photo'>
        <PhotoGridItem
          {...this.props}
          index={index}
          post={post}
        />
        <Comments {...this.props} comments={comments}/>
      </div>
    )
  }
});

export default Photo;
