import { useEffect, useState } from "react";
import { supabase } from "../../apis/supabase/config";

function MyPage() {
  const [teams, setTeams] = useState([]);
  const [user, setUser] = useState(null);
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [logo, setLogo] = useState(null);
  const [input, setInput] = useState("");
  const [ischecked, setIschecked] = useState(false);

  // 이미지 파일 미리보기
  // 이미지 파일을 저장하는 state
  // 이미지 주소를 저장하는 state

  useEffect(() => {
    const getTeams = async () => {
      const { data } = await supabase.from("clubs").select("*");
      setTeams(data);
    };
    getTeams();
  }, []);

  const getNickname = async () => {
    setIschecked(true);
    const { data } = await supabase.from("users").select("nickname").eq("nickname", input);
    if (data.length === 1) {
      alert("중복된 아이디 입니다");
    } else {
      alert("사용 가능한 아이디 입니다");
    }
  };
  // getNickname();

  useEffect(() => {
    if (selectedTeamId) {
      const getLogo = async () => {
        const { data } = await supabase.from("clubs").select("logo_url").eq("id", selectedTeamId).limit(1).single();
        setLogo(data);
      };
      getLogo();
    }
  }, [selectedTeamId]);

  // TODO: 성욱님과 함께 의논해서 수정하기 -> 임시로 만든 것

  useEffect(() => {
    // 이미 로그인 되어 있는 사용자의 id or email
    const getUser = async () => {
      const { data } = await supabase
        .from("users")
        .select("*")
        .eq("id", "7d1de00f-2328-43f3-81a3-b32037744a23")
        .limit(1)
        .single();
      setUser(data); // data.club_id -> 9
      setSelectedTeamId(data.club_id);
      setImgPreview(data.avatar_image);
      setInput(data.nickname);
    };
    getUser();
  }, []);

  const onClickHandle = async () => {
    if (input !== user.nickname && !ischecked) {
      return alert("중복 확인 버튼을 눌러주세요!");
    }
    await supabase
      .from("users")
      .update({ nickname: input, avatar_image: imgPreview, club_id: selectedTeamId })
      .eq("id", "7d1de00f-2328-43f3-81a3-b32037744a23")
      .select();
    alert("수정이 완료되었습니다!");
  };

  const onChangeFile = async (e) => {
    const avatarFile = e.target.files[0];
    console.log(avatarFile.name);
    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(`${user.id}/${avatarFile.name}`, avatarFile, { upsert: true });
    console.log(error);
    const { data: data2 } = supabase.storage.from("avatars").getPublicUrl(`${user.id}/${avatarFile.name}`);
    console.log(data2);
    setImgPreview(data2.publicUrl);
  };

  const removeUser = async () => {
    // const { error } = await supabase.from("users").delete().eq("nickname", "민석");
    // console.log(error);
    // const { data, error } = await supabase.auth.admin.deleteUser("7d1de00f-2328-43f3-81a3-b32037744a23");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded flex justify-center items-center flex-row gap-[150px] border border-primary-blue w-[800px] h-[450px]">
        <div>
          <div className="relative scale-150">
            <img
              src={imgPreview ? imgPreview : "src/assets/user.png"}
              className="w-[140px] h-[140px] rounded-[50%] object-cover"
            />
            <label>
              <input className="hidden" type="file" accept="image/*" onChange={onChangeFile} />
              <span className="flex justify-center items-center bg-primary-blue w-8 h-8 rounded-[100%] text-white absolute bottom-[9px] right-[7px]">
                +
              </span>
            </label>
          </div>
          {/* TODO: 로그인, 회원가입 끝나면 이거 수정 */}
          <div className="text-center mt-10 ">sparta@gmail.com</div>
        </div>
        <div>
          <div>관심있는 구단</div>
          <div className="flex flex-row items-center">
            {logo ? (
              <img src={logo.logo_url} className="w-[100px] h-[100px] mt-3" />
            ) : (
              <div className="w-[100px] h-[100px] bg-black-100 rounded-full"></div>
            )}
            <select
              className="ml-3 h-7 px-1 border border-black-300 rounded"
              value={selectedTeamId || undefined}
              onChange={(e) => {
                setSelectedTeamId(Number(e.target.value));
              }}
            >
              <option value={undefined}>선택하세요</option>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

          <div className=" relative mt-5">
            <div className="ml-[7px]">현재 닉네임</div>
            <input
              maxLength={5}
              className="px-[10px] py-1 w-full border rounded border-black-300 placeholder:text-black-default"
              placeholder={user?.nickname}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button className="absolute top-1/2 right-[10px] hover:to-blue-200" onClick={getNickname}>
              중복확인
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <button onClick={onClickHandle} className="bg-primary-blue text-white py-1 rounded-lg">
              수정
            </button>
            <button className="bg-[#A5020C] text-white py-1 rounded-lg" onClick={removeUser}>
              탈퇴
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
