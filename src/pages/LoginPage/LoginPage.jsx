import LoginForm from "../../components/LoginComponents/LoginForm";

function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white min-h-screen">
      <div className="bg-white p-8 border-[1.5px] border-blue-300 rounded-[10px] w-[600px] h-[600px]">
        <h2 className="mt-10 text-3xl font-bold mb-8 text-center">로그인</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
