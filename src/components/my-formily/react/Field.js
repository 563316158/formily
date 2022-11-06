import React, { useContext } from "react";
import { FormContext } from "./context";
import { observer ,FieldContext} from "@/which";

const Field = observer((props) => {
  const form = useContext(FormContext);
  console.log("form2:", form);
  const field = form.createField(props);
  console.log("field:", field);

  const component = React.createElement(field.component[0], {
    ...field.component[1],
    value: field.value,
    onChange: field.onInput,
  });

  const decorator = React.createElement(
    field.decorator[0],
    field.decorator[1],
    component
  );

  return (
    <FieldContext.Provider value={field}>{decorator}</FieldContext.Provider>
  );
});

export default Field;
