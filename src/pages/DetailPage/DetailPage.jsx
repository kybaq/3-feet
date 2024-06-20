import { useState } from "react";
import Comment from "../../components/DetailPageComponents/Comment";
import CommentInput from "../../components/DetailPageComponents/CommentInput";
import ShopProfile from "../../components/DetailPageComponents/ShopProfile";
import BigModal from "./../../components/commons/BigModal";

function DetailPage({ images }) {
  const [comments, setComments] = useState([
    {
      id: 1,
      nickname: "user_name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis commodo eros, quis consectetur quam venenatis sit amet. Etiam scelerisque",
    },
    {
      id: 2,
      nickname: "user_name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis commodo eros, quis consectetur quam venenatis sit amet. Etiam scelerisque",
    },
    {
      id: 3,
      nickname: "user_name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis commodo eros, quis consectetur quam venenatis sit amet. Etiam scelerisque",
    },
    {
      id: 4,
      nickname: "user_name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis commodo eros, quis consectetur quam venenatis sit amet. Etiam scelerisque",
    },
    {
      id: 5,
      nickname: "user_name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis commodo eros, quis consectetur quam venenatis sit amet. Etiam scelerisque",
    },
    {
      id: 6,
      nickname: "user_name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis commodo eros, quis consectetur quam venenatis sit amet. Etiam scelerisque",
    },
    {
      id: 7,
      nickname: "user_name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis commodo eros, quis consectetur quam venenatis sit amet. Etiam scelerisque",
    },
    {
      id: 8,
      nickname: "user_name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis commodo eros, quis consectetur quam venenatis sit amet. Etiam scelerisque",
    },
  ]);

  return (
    <BigModal>
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
                  key={comment.id}
                  profileImage={images}
                  username={comment.nickname}
                  commentText={comment.text}
                />
              ))}
            </div>
          </div>

          <section className="flex-none border-t border-t-black-300">
            <CommentInput setComments={setComments} />
          </section>
        </div>
      </div>
    </BigModal>
  );
}

export default DetailPage;
