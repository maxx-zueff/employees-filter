import axios from "axios";

const callAPI = function (url, method = "get", data = {}) {
  return axios({
    method: method,
    url: url,
    data: data,
  });
};

export default callAPI;
