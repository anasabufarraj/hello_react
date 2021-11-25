//------------------------------------------------------------------------------
// Copyright 2021. Anas Abu Farraj.
//------------------------------------------------------------------------------
import React from 'react';

function Like({ liked, onLike }) {
  // NOTE: props are read-only arguments
  const icon = liked ? 'bi-suit-heart-fill' : 'bi-suit-heart';

  return (
    <i style={{ fontSize: 20, cursor: 'pointer' }} className={`bi ${icon} text-danger`} onClick={onLike} />
  );
}

export default Like;
