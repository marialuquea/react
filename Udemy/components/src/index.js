import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>
       <div>
         <h4>Warning!</h4>
         Are you sure?
       </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
            author="Katie"
            timeAgo="Today at 4:45PM"
            comment="Nice!"
            avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
            author="Darwon"
            timeAgo="Today at 2:00AM"
            comment="lol"
            avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
            author="Carmen"
            timeAgo="Yesterday at 5:00PM"
            comment="lmao"
            avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>

  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
