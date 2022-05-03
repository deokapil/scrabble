import React from "react";
import { observer } from "mobx-react";
import form from "../forms/LoginForm";
import NoAuth from "../layouts/NoAuth";
import { Input } from "../components/ui/Input";

const Login = observer(() => {
  return (
    <NoAuth>
      <>
        <h1 className="title is-4">Login to play</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.submit();
          }}
        >
          <div className="field">
            <div className="control">
              <Input field={form.fields["email"]} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <Input field={form.fields["password"]} />
            </div>
          </div>
          <button
            className="button is-block is-primary is-fullwidth is-medium"
            type="submit"
          >
            Submit
          </button>
        </form>
      </>
    </NoAuth>
  );
});

export default Login;
