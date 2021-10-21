function Like(props) {
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
