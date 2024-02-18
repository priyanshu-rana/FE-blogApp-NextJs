import { action, makeObservable, observable } from "mobx";

class AuthStore {
  sessionToken = localStorage.getItem("auth_token")
    ? localStorage.getItem("auth_token")
    : "";
  isAuthenticated = !!this.sessionToken;

  constructor() {
    makeObservable(this, {
      isAuthenticated: observable,
      logIn: action,
      logOut: action,
    });
  }

  logIn = (token: string) => {
    this.isAuthenticated = true;
    localStorage.setItem("auth_token", token);
  };
  logOut = () => {
    this.isAuthenticated = false;
    localStorage.removeItem("auth_token");
  };
}

const authStore = new AuthStore();
export default authStore;
