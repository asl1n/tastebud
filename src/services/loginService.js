import apiManager from "./apiManager";

const login = async (queryObj) => {
  const message = await apiManager.axios
    .post(`/v1/admin/login`, queryObj)
    .then((response) => {
      localStorage.setItem("Authentication", response.data.token);
      localStorage.setItem("userId", response.data.user.id);
      localStorage.setItem("setupTime", new Date().getTime());
      return response;
    })
    .catch((e) => {
      return {
        status: e.response.status,
        message: "The email or password does not match",
      };
    });
  return message;
};

export default {
  login,
};