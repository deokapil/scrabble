import Form from "mobx-autoform";
import { login } from "../FeathersClient";
import { Input } from "../components/ui/Input";

let form = Form({
  identifier: "register_form",
  fields: {
    email: {
      type: "email",
      label: "Email Address",
      component: Input,
      value: null,
    },
    display_name: {
      component: Input,
      rules: "required",
      value: null,
      props: { placeholder: "Your Name" },
    },
    password: {
      component: Input,
      props: { type: "password" },
      rules: "required",
      validator: (x) => !x && ["Password is required"],
    },
  },
  async submit(snapshot, form) {
    let patch = form.getPatch();
    console.log(patch);
    // const user = await login(patch.email, patch.password);
    // console.log("submit!", user);
  },
});

export default form;
