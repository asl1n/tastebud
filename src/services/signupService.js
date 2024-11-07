import apiManager from "./apiManager";

const signup = async (queryObj) => {
  const message = await apiManager.axios
    .post(`/v1/admin/signup`, queryObj)
    .then((response) => {
      localStorage.setItem("Authentication", response.data.token);
      localStorage.setItem("userId", response.data.user.id);
      localStorage.setItem("setupTime", new Date().getTime());
      return response;
    })
    .catch((e) => {
      return {
        status: e.response.status,
        message: "Ensure it is a valid",
      };
    });
  return message;
};

export default {
  login,
};