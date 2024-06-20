import { forwardRef, useCallback, useEffect, useState } from "react";
import defaultImg from "../../assets/Img/no-picture1.png";
import Comment from "../../components/DetailPageComponents/Comment";
import CommentInput from "../../components/DetailPageComponents/CommentInput";
import ShopProfile from "../../components/DetailPageComponents/ShopProfile";
import useStoreInfo from "../../store/useStoreInfo.store";
import commentApi from "./../../apis/supabase/comments.api";
import BigModal from "./../../components/commons/BigModal";

const DetailPage = forwardRef(function DetailPage({ images, onClose }, ref) {
  const { storeInfo } = useStoreInfo();
  const [comments, setComments] = useState([]);

  const fetchCommentData = useCallback(async () => {
    try {
      const commentsData = await commentApi().getComments(storeInfo.contentId);
      setComments(commentsData || []);
    } catch (error) {
      console.error("댓글을 가져오는 도중 에러가 발생했습니다.", error);
    }
  }, [storeInfo.contentId]);

  useEffect(() => {
    fetchCommentData();
  }, [fetchCommentData]);

  return (
    <BigModal ref={ref} onClose={onClose}>
      <div className="flex w-full h-full">
        <div className="w-2/3 bg-black-200 hidden md:block">
          <img src={storeInfo.image ? storeInfo.image : defaultImg} alt="img" className="w-full h-full object-fill" />
        </div>

        <div className="flex flex-col w-full md:w-1/3 h-full overflow-hidden">
          <div className="flex-1 overflow-auto">
            <div className="flex items-center border-b border-b-1 border-b-black-300 mb-2 p-6">
              <ShopProfile title={storeInfo.title} address={storeInfo.address} />
            </div>

            <div className="p-4">
              <p className="font-semibold">▶ 한 줄 후기</p>
              {comments.map((comment) => (
                <Comment
                  key={comment.comment_id}
                  comment={comment}
                  profileImage={images}
                  fetchCommentData={fetchCommentData}
                />
              ))}
            </div>
          </div>

          <section className="flex-none border-t border-t-black-300">
            <CommentInput fetchComments={fetchCommentData} />
          </section>
        </div>
      </div>
    </BigModal>
  );
});

export default DetailPage;
