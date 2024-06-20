import { forwardRef, useEffect, useState } from "react";
import Comment from "../../components/DetailPageComponents/Comment";
import CommentInput from "../../components/DetailPageComponents/CommentInput";
import ShopProfile from "../../components/DetailPageComponents/ShopProfile";
import commentApi from "./../../apis/supabase/comments.api";
import BigModal from "./../../components/commons/BigModal";

const store_id = 1;

const DetailPage = forwardRef(function DetailPage({ images, onClose }, ref) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchCommentData = async () => {
      try {
        const commentsData = await commentApi().getComments(store_id);
        setComments(commentsData || []);
      } catch (error) {
        console.error("댓글을 가져오는 도중 에러가 발생했습니다.", error);
      }
    };

    fetchCommentData();
  }, []);

  console.log(comments);

  return (
    <BigModal ref={ref} onClose={onClose}>
      <div className="flex w-full h-full">
        <div className="w-2/3 bg-black-200">
          <img src={images} alt="img" className="w-full h-full object-fill" />
        </div>

        <div className="flex flex-col w-1/3 h-full overflow-hidden">
          <div className="flex-1 overflow-auto">
            <div className="flex items-center border-b border-b-1 border-b-black-300 mb-2 p-6">
              <ShopProfile />
            </div>

            <div className="flex p-4">본문이 들어갈 곳</div>

            <div className="p-4">
              <p>댓글</p>
              {comments.map((comment) => (
                <Comment
                  key={comment.comment_id}
                  profileImage={images}
                  username={comment.nickname}
                  commentText={comment.comment}
                />
              ))}
            </div>
          </div>

          <section className="flex-none border-t border-t-black-300">
            <CommentInput store_id={store_id} />
          </section>
        </div>
      </div>
    </BigModal>
  );
});

export default DetailPage;
