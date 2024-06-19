import clsx from "clsx";
import { useState } from "react";

function CommentInput() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.length <= 200) {
      setText(value);
      event.target.style.height = "auto";
      event.target.style.height = `${event.target.scrollHeight}px`;
    }
  };

  const isDisabled = text.trim() === "";

  const handleClick = () => {
    if (!isDisabled) {
      alert(text);
    }
  };

  return (
    <div className="flex h-full">
      <textarea
        className="flex-1 px-3 py-3 text-sm outline-none overflow-hidden resize-none hover:text-black-500"
        rows="1"
        maxLength="150"
        value={text}
        onChange={handleChange}
        placeholder="방문 기록을 남겨주세요(0/150)"
      />
      <div className="flex items-center h-full px-4 border-l border-l-black-300">
        <div
          className={clsx("text-blue-500 text-sm font-semibold hover:text-black-500 hover:font-semibold", {
            "opacity-50 cursor-not-allowed": isDisabled,
            "cursor-pointer": !isDisabled,
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
