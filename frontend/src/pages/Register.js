import React from "react";

const Register = observer(() => {
  return (
    <NoAuth>
      <>
        <h1 class="title is-4">Register New player</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.submit();
          }}
        >
          <div className="field">
            <div className="control">
              <Input className="input is-medium" field={form.fields["email"]} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <Input
                className="input is-medium"
                field={form.fields["password"]}
              />
            </div>
          </div>
          <button
            className="button is-block is-primary is-fullwidth is-medium"
            type="submit"
          >
            Submit{" "}
          </button>
        </form>
      </>
    </NoAuth>
  );
});

export default Register;
