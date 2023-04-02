import axios from "axios";
import dayjs from "dayjs";
import useAuth from "../hooks/useAuth";
import jwt_decode from "jwt-decode";

const useAxosInstance = () => {
  const { AuthToken, User, setAuthToken, setUser, logout } = useAuth();

  const headers = {
    Authorization: `Bearer ${AuthToken?.access}`,
  };

  const baseURL = "http://127.0.0.1:8000/api/";

  const axiosInstance = axios.create({
    baseURL,
    headers,
  });

  try {
    axiosInstance.interceptors.request.use(async (req) => {
      const user = jwt_decode(AuthToken?.access);
      const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

      if (!isExpired) return req;

      console.log("expired");

      const response = await axios.post(`${baseURL}token/refresh/`, {
        refresh: AuthToken.refresh,
      });

      console.log("updated");
      console.log("res", response?.data);

      if (response.status == 200) {
        const accessToken = response.data;

        localStorage.setItem("accessToken", JSON.stringify(response?.data));
        localStorage.setItem(
          "activeUser",
          JSON.stringify(jwt_decode(accessToken["access"]))
        );
        setAuthToken(response.data);
        setUser(JSON.parse(JSON.stringify(jwt_decode(accessToken["access"]))));

        req.headers.Authorization = `Bearer ${response.data.access}`;

        return req;
      } 
      else {
        console.log('logout')
        logout();
      }
    });
  } catch (error) {
    console.log(error);
  }

  return axiosInstance;
};
export default useAxosInstance;
