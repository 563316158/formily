import { useEffect } from "react";
import { FormContext } from "./context";

function FormProvider({ form, children }) {

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
