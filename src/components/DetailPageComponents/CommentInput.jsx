import clsx from "clsx";
import { useState } from "react";
import commentsApi from "../../apis/supabase/comments.api";

const user_id = "4ea63f82-0fc6-4302-ac5f-360db2c45432";
const isLogIn = false;

function CommentInput({ store_id }) {
  const { createComment } = commentsApi();
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.length <= 200) {
      setComment(value);
      event.target.style.height = "auto";
      event.target.style.height = `${event.target.scrollHeight}px`;
    }
  };

  const isDisabled = comment.trim() === "";

  const handleClick = () => {
    if (!isDisabled) {
      const newComment = {
        user_id: user_id,
        nickname: "user_name",
        comment,
        store_id,
      };
      createComment(newComment);
      setComment("");
    }
  };

  return (
    <div className="flex h-full">
      <textarea
        className="flex-1 px-3 py-3 text-sm outline-none overflow-hidden resize-none hover:text-black-500"
        rows="1"
        maxLength="200"
        value={comment}
        onChange={handleChange}
        placeholder={isLogIn ? "방문 기록을 남겨주세요(0/200)" : "로그인이 필요합니다"}
        disabled={!isLogIn}
      />
      <div className="flex items-center h-full px-4 border-l border-l-black-300">
        <div
          className={clsx("text-blue-500 text-sm font-semibold", {
            "opacity-50 cursor-not-allowed": isDisabled,
            "cursor-pointer hover:text-black-500 hover:font-semibold": !isDisabled,
          })}
          onClick={handleClick}
        >
          게시
        </div>
      </div>
    </div>
  );
}

export default CommentInput;
