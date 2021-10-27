import React from 'react';

function Like(props) {
  // NOTE: props are read-only arguments
  let icon = props.liked ? 'fa-heart' : 'fa-heart-o';

  return (
    <i
      style={{ fontSize: 20, cursor: 'pointer' }}
      className={`fa ${icon} text-danger test`}
      onClick={props.onLike}
    />
  );
}

export default Like;
