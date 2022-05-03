import Form from "mobx-autoform";
import { login } from "../FeathersClient";

let form = Form({
  identifier: "login_form",
  fields: {
    email: {
      type: "email",
      props: { className: "input is-medium", placeholder: "Email Address" },
    },
    password: {
      props: {
        type: "password",
        className: "input is-medium",
        placeholder: "password",
      },
      rules: "required",
      validator: (x) => !x && ["Password is required"],
    },
  },
  async submit(snapshot, form) {
    console.log("Hello");
    let patch = form.getPatch();
    await login(patch);
  },
});

export default form;
