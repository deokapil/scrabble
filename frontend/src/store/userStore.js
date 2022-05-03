import { observable } from "mobx";

const user = {
  user: undefined,
  token: undefined,
  get isAuthenticated() {
    return this.user ? true : false;
  },
  removeUser() {
    this.user = undefined;
    this.token = undefined;
  },
};

const observableUser = observable(user);

export default observableUser;
