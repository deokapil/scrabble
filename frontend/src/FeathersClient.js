import io from "socket.io-client";
import feathers from "@feathersjs/client";
import AppUser from "./store/userStore";

// Socket.io is exposed as the `io` global.
const socket = io("http://localhost:3030");
// @feathersjs/client is exposed as the `feathers` global.
const app = feathers();

app.configure(feathers.socketio(socket));
app.configure(feathers.authentication());

export const login = async (credentials) => {
  let auth = null;
  try {
    if (!credentials) {
      // Try to authenticate using an existing token
      auth = await app.reAuthenticate();
    } else {
      // Otherwise log in with the `local` strategy using the credentials we got
      auth = await app.authenticate({
        strategy: "local",
        ...credentials,
      });
    }
    console.log(auth);
    // If successful, show the chat page
    AppUser.user = auth.user;
    AppUser.token = auth.token;
    // localStorage.setItem("userName", auth.user.name);
    // localStorage.setItem("userEmail", auth.user.email);
    // localStorage.setItem("userToken", auth.token);
  } catch (error) {
    // If we got an error, show the login page
    console.log(error);
  }
};
