import comments from "../../apis/supabase/comments.api";
import useUserStore from "../../store/useUserStore";

function Comment({ profileImage, comment, fetchCommentData }) {
  const { deleteComment } = comments();
  const user = useUserStore((state) => state.user);
  const loggedInUserId = user?.user_metadata?.sub;

  const canDelete = loggedInUserId === comment.user_id;

  const handleDeleteComment = async () => {
    await deleteComment(comment.comment_id);
    fetchCommentData();
  };

  return (
    <div className="flex items-start space-x-3 p-2">
      <img src={profileImage} alt="profile" className="w-10 h-10 mt-2 rounded-full" />
      <div>
        <div className="flex items-center space-x-2">
          <span className="font-semibold">{comment.nickname}</span>
          {canDelete && (
            <span className="text-gray-500 text-sm hover:cursor-pointer" onClick={handleDeleteComment}>
              삭제
            </span>
          )}
        </div>
        <p className="flex items-center space-x-4">{comment.comment}</p>
      </div>
    </div>
  );
}

export default Comment;
