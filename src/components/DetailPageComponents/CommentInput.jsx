import clsx from "clsx";
import { useState } from "react";
import commentsApi from "../../apis/supabase/comments.api";
import { useModal } from "../../contexts/modal.context";
import Modal from "./../commons/Modal";

const user_id = "4ea63f82-0fc6-4302-ac5f-360db2c45432";
const isLogIn = false;

function CommentInput({ store_id }) {
  const { createComment } = commentsApi();
  const modal = useModal();
  const [comment, setComment] = useState("");

  const handleTextAreaHeight = (e) => {
    const { value } = e.target;
    if (value.length <= 200) {
      setComment(value);
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  };

  const handleGoLogInPage = (e) => {
    if (!isLogIn) {
      e.preventDefault();
      modal.open(
        <Modal>
          <h2 className="text-lg font-semibold">로그인 후 사용해주세요</h2>
        </Modal>,
      );
    }
  };

  const isDisabled = comment.trim() === "";
  const handlePostComment = () => {
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
        onChange={handleTextAreaHeight}
        placeholder={isLogIn ? "방문 기록을 남겨주세요(0/200)" : "로그인이 필요합니다"}
        onClick={handleGoLogInPage}
      />
      <div className="flex items-center h-full px-4 border-l border-l-black-300">
        <div
          className={clsx("text-blue-500 text-sm font-semibold", {
            "opacity-50 cursor-not-allowed": isDisabled,
            "cursor-pointer hover:text-black-500 hover:font-semibold": !isDisabled,
          })}
          onClick={handlePostComment}
        >
          게시
        </div>
      </div>
    </div>
  );
}

export default CommentInput;
