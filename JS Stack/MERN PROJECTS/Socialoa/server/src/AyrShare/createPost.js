import axios from "axios";

export const uploadPost = async (data) => {
  try {
    const res = await axios.post("https://api.ayrshare.com/api/post", data);
    console.log(res);
  } catch (error) {
    console.log("Error in uploading post: ", error);
  }
};