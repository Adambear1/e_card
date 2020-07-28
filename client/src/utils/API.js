import axios from "axios";

export default {
  getGoogle: function () {
    return axios.get("/auth/google");
  },
  getUser: function () {
    return axios.get("/api/oauth");
  },
  sendUser: function () {
    return axios.post("/api/user");
  },
};
