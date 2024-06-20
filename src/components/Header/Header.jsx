import myPageIcon from "./../../assets/myPageIcon.png";
import useUserStore from "../../store/useUserStore";
import supabase from "../../apis/supabase/supabase.config";
import { useNavigate } from "react-router-dom";
import threeFeetLogo from "./../../assets/threeFeetLogo.png";

function Header() {
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };
  return (
    <header className="bg-blue-200 flex items-center justify-center h-[64px] w-[1920px]">
      <center className="flex items-center justify-between h-[64px] w-[1320px]">
        <div onClick={() => navigate("/")} className="flex items-center">
          <img src={threeFeetLogo} alt="logo" className="h-8 w-8 mr-2" />
          <span className="font-bold text-2xl">쓰리피트</span>
        </div>
        <div className="flex items-center">
          {user ? (
            <>
              <div className="pr-4 font-bold">{user.email}</div>
              <button
                onClick={logout}
                className="bg-blue-700 text-white px-4 py-1 rounded-[10px] mr-4 hover:bg-blue-900 transition duration-200"
              >
                로그아웃
              </button>
              <img onClick={() => navigate("/mypage")} src={myPageIcon} alt="user" className="h-6 w-6" />
            </>
          ) : (
            <>
              {/* TODO: 로그인 버튼 누르면 로그인 페이지로 이동 ex) useNavigate */}
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-700 text-white px-4 py-1 rounded-[10px] mr-4 hover:bg-blue-900 transition duration-200"
              >
                로그인
              </button>
              <img onClick={() => navigate("/mypage")} src={myPageIcon} alt="user" className="h-6 w-6" />
            </>
          )}
        </div>
      </center>
    </header>
  );
}

export default Header;
