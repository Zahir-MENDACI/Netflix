import axios from "axios";

export const fetchData = async requestUrl => await axios.get(requestUrl, {
  headers: {
    authorization: localStorage.getItem("id")
  }
});
