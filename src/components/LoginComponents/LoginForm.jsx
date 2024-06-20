import { useMutation } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../apis/supabase/supabase.config";
import useUserStore from "../../store/useUserStore";
import InputField from "./InputField";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const validateEmail = useCallback((email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }, []);

  const validatePassword = useCallback((password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }, []);

  const login = async () => {
    let isValid = true;
    if (!validateEmail(email)) {
      setEmailErrorMessage("유효한 이메일을 입력해 주세요.");
      isValid = false;
    } else {
      setEmailErrorMessage("");
    }

    if (!validatePassword(password)) {
      setPasswordErrorMessage("비밀번호는 최소 8자, 영문 대소문자 및 숫자, 특수 문자를 포함해야 합니다.");
      isValid = false;
    } else {
      setPasswordErrorMessage("");
    }

    if (!isValid) {
      throw new Error("유효성 검사 실패");
    }

    // 구조분해할당 (destructuring)
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      if (error.status === 400) {
        throw new Error("아이디 또는 비밀번호를 잘못 입력했습니다");
      } else {
        throw new Error(error.message);
      }
    }
    localStorage.setItem("user", JSON.stringify(data.user));

    return data;
  };

  const { mutate: loginMutation } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data.user);
      alert("로그인 성공");
      const queryParams = new URLSearchParams(location.search);
      const redirectUrl = queryParams.get("redirect");
      if (redirectUrl) {
        window.location.href = decodeURIComponent(redirectUrl);
      } else {
        navigate("/");
      }
    },
    onError: (error) => {
      if (error.message !== "유효성 검사 실패") {
        setPasswordErrorMessage(error.message);
      }
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    loginMutation();
  };

  return (
    <form className="px-12" onSubmit={handleLogin}>
      <InputField
        label="이메일"
        type="email"
        placeholder="아이디를 입력해 주세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={emailErrorMessage}
      />
      <InputField
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해 주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        errorMessage={passwordErrorMessage}
      />
      <button
        type="submit"
        className={`mb-6 h-12 text-lg w-full bg-blue-600 text-white py-2 rounded-[10px] transition duration-200 ${
          isLoading ? "cursor-not-allowed bg-blue-400" : "hover:bg-blue-700"
        }`}
        disabled={isLoading}
      >
        {isLoading ? "로그인 중..." : "로그인 하기"}
      </button>
      <div className="mb-5 underline flex justify-center">
        <Link to="/signup">아직 회원이 아니신가요?</Link>
      </div>
    </form>
  );
}

export default LoginForm;
