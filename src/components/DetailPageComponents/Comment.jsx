function Comment({ profileImage, username, timeAgo, commentText: comment }) {
  return (
    <div className="flex items-start space-x-3 p-2">
      <img src={profileImage} alt="profile" className="w-10 h-10 mt-2 rounded-full" />
      <div>
        <div className="flex items-center space-x-2">
          <span className="font-semibold">{username}</span>
          <span className="text-gray-500 text-sm">{timeAgo}</span>
        </div>
        <p className="flex items-center space-x-4 text-gray-500 text-sm">{comment}</p>
      </div>
    </div>
  );
}

export default Comment;
