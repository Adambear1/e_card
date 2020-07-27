import axios from "axios";

export default {
  getUser: function () {
    return axios.get("/api/oauth");
  },
  sendUser: function () {
    return axios.post("/api/user");
  },
};
