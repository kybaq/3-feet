import supabase from "./supabase.config";

// 댓글 CRUD
const comments = () => {
  const getComments = async (store_id) => {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("store_id", store_id)
      .order("created_at", { ascending: false });
    if (error) {
      console.error("Comments Fetch Error: ", error);
    }
    return data;
  };

  const createComment = async (comment) => {
    const { error } = await supabase.from("comments").insert([comment]);
    if (error) {
      console.error("Create Comment Error: ", error);
    }
  };

  const updateComment = async (comment_id, newComment) => {
    const { error } = await supabase.from("comments").update(newComment).eq("comment_id", comment_id);
    if (error) {
      console.error("Update Comment Error: ", error);
    }
  };

  const deleteComment = async (comment_id) => {
    const { error } = await supabase.from("comments").delete().eq("comment_id", comment_id);
    if (error) {
      console.error("Delete Comment Error: ", error);
    }
  };

  return {
    getComments,
    createComment,
    updateComment,
    deleteComment,
  };
};

export default comments;
