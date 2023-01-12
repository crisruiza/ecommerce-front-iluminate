import axios from "axios";
const URL_ROOT = process.env.REACT_APP_API_URL;

const getUsers = async (data) => {
  const response = await axios.get(`${URL_ROOT}/users`);
  return response.data;
};

const getUser = async (id) => {
  const response = await axios.get(`${URL_ROOT}/users/profile/${id}`, {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });
  return response.data;
};

export { getUsers, getUser };
