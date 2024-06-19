function MyPage() {
  const teams = [
    { name: "두산 베어스", value: 1 },
    { name: "롯데 자이언츠", value: 2 },
    { name: "키움 히어로즈", value: 3 },
    { name: "한화 이글스", value: 4 },
    { name: "KIA 타이거즈", value: 5 },
    { name: "KT 위즈", value: 6 },
    { name: "LG 트윈스", value: 7 },
    { name: "NC 다이노스", value: 8 },
    { name: "SSG 랜더스", value: 9 },
    { name: "삼성 라이온즈", value: 10 },
  ];
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded flex justify-center items-center flex-row gap-[50px] border border-primary-blue w-[520px] h-[330px]">
        <div>
          <div className="relative">
            <img src="src/assets/user.png" className="w-[150px]" />
            <label>
              <input className="hidden" type="file" accept="image/*" />
              <span className="flex justify-center items-center bg-primary-blue w-10 h-10 rounded-[100%] text-white absolute bottom-[10px] right-[10px]">
                +
              </span>
            </label>
          </div>
          <div className="text-center mt-3">sparta@gmail.com</div>
        </div>
        <div>
          <div>관심있는 구단</div>
          <div className="flex flex-row items-center">
            <img src="src/assets/samsung-lions.png" className="w-[100px] mt-3" />
            <select className="ml-3 h-7 px-1 border border-black-300 rounded">
              {teams.map((team) => (
                <option key={team.value} value={team.value}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
          <div className="gap-3 relative mt-5">
            <div className="ml-[7px]">닉네임</div>
            <input
              maxLength={5}
              className="px-[10px] py-1 w-full border rounded border-black-300"
              placeholder="현재 닉네임"
            ></input>
            <button className="absolute top-1/2 right-[10px]">중복확인</button>
          </div>
          <div className="flex flex-col gap-1 mt-4">
            <button className="bg-primary-blue text-white py-1 rounded-lg">수정</button>
            <button className="bg-[#A5020C] text-white py-1 rounded-lg">탈퇴</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
