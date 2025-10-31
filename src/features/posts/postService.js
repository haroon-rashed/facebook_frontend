import axios from "axios";
const base_url = "http://localhost:5174/api/posts";

export const addPost = async (postData) => {
  const response = await axios.post(
    `${base_url}/add-post/${postData?.user_id}`,
    postData
  );

  return response.data;
};

export const getAllPosts = async () => {
  const response = await axios.get(`${base_url}/get-all-posts`);
  return response.data;
};



export const makeReaction = async (reactionData) => {
  const response = await axios.post(`${base_url}/add-reaction/${reactionData.post_id}/${reactionData.user_id}`, reactionData);
  return response.data
}

export const getReactions = async (post_id) => {
  const response = await axios.get(`${base_url}/get-reactions/${post_id}`);
  return response.data
}


export const addComment = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }

  }


  const response = await axios.post(`${base_url}/add-comment/${postData.post_id}`, postData, config)

  return response.data



}