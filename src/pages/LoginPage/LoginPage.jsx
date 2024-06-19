import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import supabase from "../../apis/supabase/supabase.config";
import useSelectedClubStore from "../../store/useSelectedClubStore";

function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const setUser = useSelectedClubStore((state) => state.setUser);

  const validateId = (id) => {
    const regex = /^.{4,20}$/;
    return regex.test(id);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const loginMutation = useMutation(
    async () => {
      if (!validateId(id)) {
        throw new Error("아이디는 4글자 이상 20글자 이하입니다.");
      }
      if (!validatePassword(password)) {
        throw new Error("비밀번호를 올바르게 입력하세요.");
      }
      const { user, error } = await supabase.auth.signIn({ id, password });
      if (error) throw new Error(error.message);
      return user;
    },
    {
      onSuccess: (user) => {
        setUser(user);
        alert("로그인 성공");
      },
      onError: (error) => {
        alert(error.message);
      },
    },
  );

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation.mutate();
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="mt-40 bg-white p-8 border-[1.5px] border-blue-300 rounded-[10px] w-[600px] h-[600px]">
        <h2 className="mt-10 text-3xl font-bold mb-8 text-center">로그인</h2>
        <form className="px-12" onSubmit={handleLogin}>
          <div className="mb-10">
            <label className="mb-2 text-lg block font-bold">아이디</label>
            <input
              type="id"
              className="w-full h-12 px-3 py-2 border rounded-[10px]"
              placeholder="아이디를 입력해 주세요"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="mb-16">
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
          <button
            type="submit"
            className="mb-6 h-12 text-lg w-full bg-blue-600 text-white py-2 rounded-[10px] hover:bg-blue-700 transition duration-200"
          >
            로그인 하기
          </button>
          <div className="mb-5 underline flex justify-center">아직 회원이 아니신가요?</div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
