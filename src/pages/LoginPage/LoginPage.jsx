import React from 'react';

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white">
            <div className="mt-40 bg-white p-8 border-[1.5px] border-blue-300 rounded-[10px] w-[600px] h-[600px]">
                <h2 className="mt-10 text-3xl font-bold mb-8 text-center">로그인</h2>
                <form className="px-12">
                    <div className="mb-10">
                        <label className="mb-2 text-lg block font-bold">아이디</label>
                        <input
                            type="id"
                            className="w-full h-12 px-3 py-2 border rounded-[10px]"
                            placeholder="아이디를 입력해 주세요"
                        />
                    </div>
                    <div className="mb-16">
                        <label className="mb-2 text-lg block font-bold">비밀번호</label>
                        <input
                            type="password"
                            className="w-full h-12 px-3 py-2 border rounded-[10px]"
                            placeholder="비밀번호를 입력해 주세요"
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
};

export default LoginPage;