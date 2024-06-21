import clsx from "clsx";
import { useEffect, useState } from "react";
import commentsApi from "../../apis/supabase/comments.api";
import { useModal } from "../../contexts/modal.context";
import useStoreInfo from "../../store/useStoreInfo.store";
import useUserStore from "../../store/useUserStore";
import Modal from "./../commons/Modal";

function CommentInput({ fetchComments }) {
  const modal = useModal();
  const user = useUserStore();
  const { storeInfo } = useStoreInfo();
  const { createComment } = commentsApi();
  const [comment, setComment] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);

  useEffect(() => {
    const isloggedIn = localStorage.getItem("user");
    if (isloggedIn && isloggedIn !== "null") {
      setIsLogIn(true);
    }
  }, []);

  // textarea 높이 자동 조절
  const handleTextAreaHeight = (e) => {
    const { value } = e.target;
    if (value.length <= 200) {
      setComment(value);
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  };

  // 비로그인 유저 /login 페이지로 이동
  const handleConfirm = () => {
    const currentUrl = window.location.href;
    const encodedUrl = encodeURIComponent(currentUrl);
    window.location.href = `/login?redirect=${encodedUrl}`;
  };

  const handleGoLogInPage = (e) => {
    if (!isLogIn) {
      e.preventDefault();
      modal.open(
        <Modal onConfirm={handleConfirm}>
          <h2 className="text-lg font-semibold">댓글은 로그인 후 사용 가능합니다</h2>
          <p className="text-center">
            확인을 누르시면 <br />
            로그인 페이지로 이동합니다.
          </p>
        </Modal>,
      );
    }
  };

  // 공란을 고려하여 댓글 생성
  const isCommentBlank = comment.trim() === "";
  const handlePostComment = async () => {
    if (!isCommentBlank && isLogIn) {
      const newComment = {
        user_id: user.user.id,
        nickname: user.user.nickname,
        comment,
        store_id: storeInfo.contentId,
      };
      try {
        await createComment(newComment);
        setComment("");
        fetchComments();
      } catch (error) {
        console.error("댓글을 생성하는 도중 에러가 발생했습니다.", error);
      }
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
            "opacity-50 cursor-not-allowed": isCommentBlank,
            "cursor-pointer hover:text-black-500 hover:font-semibold": !isCommentBlank,
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
