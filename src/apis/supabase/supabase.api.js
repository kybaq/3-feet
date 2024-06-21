import supabase from "./supabase.config";

export const fetchClubs = async () => {
  const { data, error } = await supabase.from("clubs").select();
  if (error) {
    console.error("클럽 목록 받아오는 과정에서 에러 발생->", error);
    return;
  }
  // 반환값 :  [ {id, name, latitude, longitude, logo_url, banner_url }, …]
  return data;
};

export const fetchClubById = async (clubId) => {
  const { data, error } = await supabase.from("clubs").select().eq("id", clubId);
  if (error) {
    console.error("아이디 값에 따른 클럽 정보를 가져올 수 없습니다->", error);
    return;
  }
  // 반환값 : {id, name, latitude, longitude, logo_url, banner_url }
  return data[0];
};

export const InsertUser = async (data) => {
  const { error: insertError } = await supabase.from("users").insert({
    id: data.user.id,
    email: data.user.email,
    nickname: data.user.user_metadata.nickname,
    avatar_image: null,
    club_id: null,
  });

  if (insertError) {
    console.error(" userInfo에 유저 생성시, 에러가 발생", insertError.message);
    return;
  }
};
