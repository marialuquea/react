import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
          author="Katie"
          timeAgo="Today at 4:45PM"
          comment="Nice!"
          avatar={faker.image.avatar()}
      />
      <CommentDetail
          author="Darwon"
          timeAgo="Today at 2:00AM"
          comment="lol"
          avatar={faker.image.avatar()}
      />
      <CommentDetail
          author="Carmen"
          timeAgo="Yesterday at 5:00PM"
          comment="lmao"
          avatar={faker.image.avatar()}
      />
    </div>

  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
