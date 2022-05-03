import React from "react";
import _ from "lodash/fp";
import { values } from "mobx";
import { observer } from "mobx-react";

let ErrorAlert = ({ children }) =>
  children && <div style={{ color: "red" }}>{children}</div>;

// Todo: spinner + check etc + color????
export let CommandButton = observer(({ command, children }) => (
  <button onClick={command} disabled={command.state.processing}>
    {_.startCase(command.state.status) || children}
  </button>
));

export let FormError = observer(({ form }) => (
  <ErrorAlert>{form.submitError}</ErrorAlert>
));

export let FormField = observer(({ field }) => (
  <div>
    <label>{field.component && <field.component field={field} />}</label>
    {_.map(
      (e) => (
        <ErrorAlert key={e}>{e}</ErrorAlert>
      ),
      _.castArray(field.errors)
    )}
  </div>
));
export let FlatForm = observer(({ form }) => (
  <div>
    {_.map(
      (field) => (
        <FormField key={field.field} field={field} />
      ),
      values(form.fields)
    )}
    <button onClick={form.reset}>Reset</button>
    <CommandButton command={form.submit}>Submit</CommandButton>
    <FormError form={form} />
  </div>
));
