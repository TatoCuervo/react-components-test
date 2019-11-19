import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail.js";
import ApprovalCard from "./ApprovalCard.js";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Tato"
          avatar={faker.image.avatar()}
          timeAgo="Today at 14.00 pm"
          content="Mock comment 1"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Vane"
          avatar={faker.image.avatar()}
          timeAgo="Today at 18.00 pm"
          content="Mock comment 2"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          avatar={faker.image.avatar()}
          timeAgo="Yesterday at 11.00 am"
          content="Mock comment 3"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
