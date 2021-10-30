//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';

function Like(props) {
  // NOTE: props are read-only arguments
  let icon = props.liked ? 'bi-suit-heart-fill' : 'bi-suit-heart';

  return (
    <i
      style={{ fontSize: 20, cursor: 'pointer' }}
      className={`bi ${icon} text-danger`}
      onClick={props.onLike}
    />
  );
}

export default Like;
