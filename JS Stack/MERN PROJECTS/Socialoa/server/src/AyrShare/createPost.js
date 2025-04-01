import axios from "axios";

export const uploadPost = async (data) => {
  try {
    const res = await axios.post(
      "https://api.ayrshare.com/api/post",
      data, // First argument is the request body
      {
        headers: {
          'Authorization': 'Bearer 42DN27X-M054ARN-QW67ZTA-3WAV71G', // Move headers here
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log("Error in uploading post: ", error.response?.data || error.message);
  }
};
