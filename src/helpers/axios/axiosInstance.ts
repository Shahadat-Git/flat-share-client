import { authKey } from "@/constants/auth";
import deleteCookies from "@/services/actions/deleteCookies";

import { IGenericErrorResponse, TResponseSuccess } from "@/types";
import axios from "axios";

const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage?.getItem(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    // console.log("console from axios instance =>", response);
    const responseObject: TResponseSuccess = {
      data: response?.data,
    };
    return responseObject;
  },
  async function (error) {
    const config = error.config;
    if (error?.response?.status === 401 && !config.sent) {
      config.sent = true;
      localStorage?.removeItem(authKey);
      deleteCookies([authKey]);

      return instance(config);
    } else {
      const responseObject: IGenericErrorResponse = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || "Something went wrong",
        errorMessages: error?.response?.data?.errorMessages,
      };

      return responseObject;
    }
  }
);

export { instance };
