import React from 'react';
import { Link } from 'react-router';

import PhotoGridItem from './PhotoGridItem';

const PhotoGrid = React.createClass({
  render() {

    var photos = this.props.posts.map((post, index) => (
      <PhotoGridItem
        { ...this.props }
        index={index}
        key={index}
        post={post}
      />
    ));

    return (
      <div className='photo-grid'>
        { photos }
      </div>
    )
  }
});

export default PhotoGrid;
