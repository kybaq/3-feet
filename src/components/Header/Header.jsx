import { useNavigate } from "react-router-dom";
import supabase from "../../apis/supabase/supabase.config";
import useUserStore from "../../store/useUserStore";
import myPageIcon from "./../../assets/myPageIcon.png";
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
    <header className="bg-blue-200 flex items-center justify-center h-[64px] w-[full]">
      <center className="flex items-center justify-between h-[64px] w-[1080px]">
        <div onClick={() => navigate("/")} className="flex items-center mx-6">
          <img src={threeFeetLogo} alt="logo" className="h-8 w-8 mr-2" />
          <span className="font-bold text-2xl">쓰리피트</span>
        </div>
        <div className="flex items-center mx-4">
          {user ? (
            <>
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
            </>
          )}
        </div>
      </center>
    </header>
  );
}

export default Header;
