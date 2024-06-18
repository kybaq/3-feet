import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-200 flex items-center justify-center h-[64px] w-[1920px]">
      <center className="flex items-center justify-between h-[64px] w-[1320px]">
        <div className="flex items-center">
          <img src="" alt="logo" className="h-8 w-8 mr-2" />
          <span className="font-bold text-2xl">쓰리피트</span>
        </div>
        <div className="flex items-center">
          <button className="bg-blue-800 text-white px-4 py-1 rounded mr-4">로그인</button>
          <img src="https://cdn-icons-png.flaticon.com/512/1358/1358034.png" alt="user" className="h-6 w-6" />
        </div>
      </center>
    </header>
  );
};

export default Header;
