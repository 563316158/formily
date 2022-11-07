import { observer } from "@/which";
import { useParentForm } from "./hooks";

const FormConsumer = observer((props) => {
  const form = useParentForm();

  return props.children(form);
});

export default FormConsumer;
