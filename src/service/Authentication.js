import { Axios } from "axios";

class AuthService {
  constructor() {
    this.axios = Axios;
  }

  login = async (user) => {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(user);
        }, 2000);
      } catch (error) {
        reject(error);
      }
    });
  };
}

export default AuthService;
