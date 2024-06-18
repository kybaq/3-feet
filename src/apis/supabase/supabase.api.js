import supabase from "./supabase.config";

export const fetchClubs = async () => {
  const { data, error } = await supabase.from("clubs").select();
  if (error) {
    console.error("클럽 목록 받아오는 과정에서 에러 발생->", error);
    return;
  }
  return data;
};

export const fetchClubById = async (clubId) => {
  const { data, error } = await supabase.from("clubs").select().eq("id", clubId);
  if (error) {
    console.error("아이디 값에 따른 클럽 정보를 가져올 수 없습니다->", error);
    return;
  }
  return data[0];
};
