import React from "react";
import SignUpForm from "../../components/SignUpComponents/SignUpForm";

function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white min-h-screen">
      <div className="bg-white p-8 border-[1.5px] border-blue-300 rounded-[10px] w-[600px] h-[700px]">
        <h2 className="mt-4 text-3xl font-bold mb-8 text-center">회원가입</h2>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUpPage;
