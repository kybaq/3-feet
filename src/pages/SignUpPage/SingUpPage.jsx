import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import supabase from "../../apis/supabase/supabase.config";

function SignUpPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateId = (id) => {
    const regex = /^.{4,20}$/;
    return regex.test(id);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const validateNickname = (nickname) => {
    const regex = /^.{2,12}$/;
    return regex.test(nickname);
  };

  const signUpMutation = useMutation(
    async () => {
      if (!validateId(id)) {
        throw new Error("아이디는 4글자 이상 20글자 이하입니다.");
      }
      if (!validatePassword(password)) {
        throw new Error(`비밀번호는 8글자 이상 16글자 이하입니다.
          비밀번호는 영문, 숫자, 특수문자 1개 이상 포함되어야 합니다.`);
      }
      if (!validateNickname(nickname)) {
        throw new Error("닉네임은 2글자 이상 12글자 이하입니다.");
      }
      const { error: signUpError = null } = await supabase.auth.signUp({ email, password });
      if (signUpError) throw new Error(signUpError.message);

      const { error: insertError = null } = await supabase.from("profiles").insert([{ email, nickname }]);
      if (insertError) throw new Error(insertError.message);
    },
    {
      onSuccess: () => {
        alert("회원가입 성공");
      },
      onError: (error) => {
        setErrorMessage(error.message);
      },
    },
  );

  const checkDuplicate = async (field, value) => {
    let { data, error } = await supabase.from("profiles").select("*").eq(field, value);
    if (error) throw new Error(error.message);
    return data.length > 0;
  };

  const handleDuplicateCheck = async (field, value) => {
    try {
      const isDuplicate = await checkDuplicate(field, value);
      if (isDuplicate) {
        alert(`${field}이(가) 이미 사용 중입니다.`);
      } else {
        alert(`${field}을(를) 사용할 수 있습니다.`);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    signUpMutation.mutate();
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="mt-32 bg-white p-8 border-[1.5px] border-blue-300 rounded-[10px] w-[600px] h-[700px]">
        <h2 className="mt-7 text-3xl font-bold mb-8 text-center">회원가입</h2>
        <form className="px-12" onSubmit={handleSignUp}>
          <div className="mb-14">
            <label className="mb-2 text-lg block font-bold">아이디</label>
            <div className="relative">
              <input
                type="id"
                className="w-full h-12 px-3 py-2 border rounded-[10px]"
                placeholder="아이디를 입력해 주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-2 top-2 bottom-2 bg-blue-100 px-3 py-1 rounded-[10px] border-[1.5px] border-blue-500 hover:bg-blue-300 transition duration-200"
                onClick={() => handleDuplicateCheck("email", email)}
              >
                중복확인
              </button>
            </div>
          </div>
          <div className="mb-14">
            <label className="mb-2 text-lg block font-bold">비밀번호</label>
            <input
              type="password"
              className="w-full h-12 px-3 py-2 border rounded-[10px]"
              placeholder="비밀번호를 입력해 주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-12">
            <label className="mb-2 text-lg block font-bold">닉네임</label>
            <div className="relative">
              <input
                type="text"
                className="w-full h-12 px-3 py-2 border rounded-[10px]"
                placeholder="닉네임을 입력해 주세요"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-2 top-2 bottom-2 bg-blue-100 px-3 py-1 rounded-[10px] border-[1.5px] border-blue-500 hover:bg-blue-300 transition duration-200"
                onClick={() => handleDuplicateCheck("nickname", nickname)}
              >
                중복확인
              </button>
            </div>
          </div>
          {errorMessage && <div className="mb-4 text-red-500">{errorMessage}</div>}
          <button
            type="submit"
            className="mb-6 h-12 text-lg w-full bg-blue-600 text-white py-2 rounded-[10px] hover:bg-blue-700 transition duration-200"
          >
            회원가입 하기
          </button>
          <div className="mb-5 underline flex justify-center">이미 회원이신가요? 로그인 하러 가기</div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
