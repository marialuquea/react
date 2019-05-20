import React from 'react';

const CommentDetail = props => {
  //console.log(props);
  console.log(props.author);
  return (
    <div className="comment">
      <a href="/" className="avatar"><img alt="avatar" src={props.avatar}/></a>
      <div className="content">
        <a href="/" className="author">{props.author}</a>
        <div className="metadata"><span className="date">{props.timeAgo}</span></div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

// makes it available in other files
export default CommentDetail;
