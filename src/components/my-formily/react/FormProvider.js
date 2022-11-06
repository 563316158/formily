import { useEffect } from "react";
import { FormContext } from "./context";

function FormProvider({ form, children }) {
  console.log("form1:", form);

  //表单的挂载 卸载
  useEffect(() => {
    form.onMount();
    return () => {
      form.onUnmount();
    };
  }, []);

  return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
}

export default FormProvider;
