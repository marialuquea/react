import React from 'react';
import faker from 'faker';

const CommentDetail = props => {
  //console.log(props);
  console.log(props.author);
  return (
    <div className="comment">
      <a href="/" className="avatar"><img alt="avatar" src={faker.image.avatar()}/></a>
      <div className="content">
        <a href="/" className="author">{props.author}</a>
        <div className="metadata"><span className="date">Today at 6pm </span></div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  );
};

// makes it available in other files
export default CommentDetail;
