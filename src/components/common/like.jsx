// Stateless functional component
function Like(props) {
  let iconClass = props.liked ? 'fa-heart' : 'fa-heart-o';
  return (
    <i
      style={{ fontSize: 20, cursor: 'pointer' }}
      className={`fa ${iconClass} text-danger test`}
      onClick={props.onLike}
    />
  );
}

export default Like;

// import React, { Component } from 'react';
//
// class Like extends Component {
//   render() {
//     let iconClass = this.props.liked ? 'fa-heart' : 'fa-heart-o';
//     return (
//       <i
//         style={{ fontSize: 20, cursor: 'pointer' }}
//         className={`fa ${iconClass} text-danger test`}
//         onClick={this.props.onLike}
//       />
//     );
//   }
// }
//
// export default Like;
