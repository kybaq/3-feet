import Comment from "../../components/DetailPageComponents/Comment";
import CommentInput from "../../components/DetailPageComponents/CommentInput";
import ShopProfile from "../../components/DetailPageComponents/ShopProfile";
import BigModal from "./../../components/commons/BigModal";

function DetailPage({ images }) {
  // const navigate = useNavigate();

  // const back = () => {
  //   // window.history.back();
  //   navigate(-1);
  // };

  const comments = [
    {
      id: 1,
      username: "user_name",
      timeAgo: "1일",
      commentText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis commodo eros, quis consectetur quam venenatis sit amet. Etiam scelerisque",
    },
    {
      id: 1,
      username: "user_name",
      timeAgo: "1일",
      commentText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis commodo eros, quis consectetur quam venenatis sit amet. Etiam scelerisque",
    },
    {
      id: 1,
      username: "user_name",
      timeAgo: "1일",
      commentText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis commodo eros, quis consectetur quam venenatis sit amet. Etiam scelerisque",
    },
    {
      id: 1,
      username: "user_name",
      timeAgo: "1일",
      commentText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis commodo eros, quis consectetur quam venenatis sit amet. Etiam scelerisque",
    },
    {
      id: 1,
      username: "user_name",
      timeAgo: "1일",
      commentText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis commodo eros, quis consectetur quam venenatis sit amet. Etiam scelerisque",
    },
    {
      id: 1,
      username: "user_name",
      timeAgo: "1일",
      commentText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis commodo eros, quis consectetur quam venenatis sit amet. Etiam scelerisque",
    },
  ];

  return (
    <BigModal>
      <div className="flex w-full h-full">
        <div className="w-2/3 bg-black-200">
          <img src={images} alt="img" className="w-full h-full object-fill" />
        </div>

        <div className="flex flex-col w-1/3 h-full overflow-auto">
          <div className="flex items-center border-b border-b-1 border-b-black-300 mb-2 p-4">
            <ShopProfile />
          </div>

          <div className="flex items-center p-4">본문이 들어갈 곳</div>
          <div className="flex-1 items-center p-4">
            <p>댓글</p>
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                profileImage={images}
                username={comment.username}
                timeAgo={comment.timeAgo}
                commentText={comment.commentText}
              />
            ))}
          </div>

          <div className="fixed bottom-0 items-start border-t border-t-black-300 mt-4">
            <CommentInput />
          </div>
        </div>
      </div>
    </BigModal>
  );
}

export default DetailPage;
