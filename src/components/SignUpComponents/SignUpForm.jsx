import React, { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import supabase from "../../apis/supabase/supabase.config";
import InputField from "./InputField";
import DuplicateCheckButton from "./DuplicateCheckButton";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = useCallback((email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }, []);

  const validatePassword = useCallback((password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }, []);

  const validateNickname = useCallback((nickname) => {
    const regex = /^.{2,12}$/;
    return regex.test(nickname);
  }, []);

  const signUp = async () => {
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
    if (!validateNickname(nickname)) {
      setNicknameErrorMessage("닉네임은 2글자 이상 12글자 이하입니다.");
      isValid = false;
    } else {
      setNicknameErrorMessage("");
    }
    if (!isValid) {
      throw new Error("유효성 검사 실패");
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          nickname,
        },
      },
    });

    if (signUpError) throw new Error(signUpError.message);
    // TODO: 회원가입 성공시 자동으로 로그인 페이지로 이동 hint: useNavigate
    return data.user;
  };

  const { mutate: signUpMutation } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      alert("회원가입 성공");
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  // 중복여부 버튼을 클릭했을 때, 체크해야한다.
  const checkDuplicate = async (field, value) => {
    // 1. supabase.auth.admin은 server 없이 사용할 수 없다 -> 다른 방법이 필요하다
    // const { data, error } = await supabase.auth.admin.listUsers();
    // 2. users 테이블에 email 데이터를 추가한다 (더 좋은 방법도 있을까?)
    // 3. users 테이블에서 email이 이미 존재하는지 확인하기 위해 입력한 이메일과 일치하는 이메일을 가져온다
    const { data, error } = await supabase.from("users").select("*").eq("email", value);
    if (error) throw new Error(error.message);

    const isDuplicate = data.some((user) => user[field] === value);
    return isDuplicate;
  };

  const handleDuplicateCheck = async (field, value) => {
    if (field === "email" && !validateEmail(value)) {
      setEmailErrorMessage("유효한 이메일을 입력해 주세요.");
      return;
    }
    if (field === "nickname" && !validateNickname(value)) {
      setNicknameErrorMessage("닉네임은 2글자 이상 12글자 이하입니다.");
      return;
    }

    try {
      const isDuplicate = await checkDuplicate(field, value);
      if (isDuplicate) {
        alert(`사용할 수 없는 ${field}입니다.`);
      } else {
        alert(`사용할 수 있는 ${field}입니다.`);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);
    signUpMutation();
  };

  return (
    <form className="px-12" onSubmit={handleSignUp}>
      <InputField
        label="이메일"
        type="email"
        placeholder="이메일을 입력해 주세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        errorMessage={emailErrorMessage}
      >
        <DuplicateCheckButton onClick={() => handleDuplicateCheck("email", email)} />
      </InputField>
      <InputField
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해 주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        errorMessage={passwordErrorMessage}
      />
      <InputField
        label="닉네임"
        type="text"
        placeholder="닉네임을 입력해 주세요"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        errorMessage={nicknameErrorMessage}
      >
        <DuplicateCheckButton onClick={() => handleDuplicateCheck("nickname", nickname)} />
      </InputField>
      {errorMessage && <div className="mb-4 text-red-500">{errorMessage}</div>}
      <button
        type="submit"
        className={`mt-4 mb-6 h-12 text-lg w-full bg-blue-600 text-white py-2 rounded-[10px] transition duration-200 ${
          isLoading ? "cursor-not-allowed bg-blue-400" : "hover:bg-blue-700"
        }`}
        disabled={isLoading}
      >
        {isLoading ? "회원가입 중..." : "회원가입 하기"}
      </button>
      <div className="mb-5 underline flex justify-center">
        <Link to="/login">이미 회원이신가요? 로그인 하러 가기</Link>
      </div>
    </form>
  );
}

export default SignUpForm;
