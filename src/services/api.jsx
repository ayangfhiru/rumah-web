import { axiosConfig } from "./axiosConfig";

export const getUsers = async () => {
  const users = await axiosConfig
    .get("/users")
    .catch((err) => console.log(err));
  return users.data;
};

export const addPost = async (data) => {
  const sendPost = await axiosConfig
    .post("/posts", data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return sendPost;
};

export const getPost = async () => {
  const posts = await axiosConfig("/posts").catch((err) => console.log(err));
  return posts.data;
};
