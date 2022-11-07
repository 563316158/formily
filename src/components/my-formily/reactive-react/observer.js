import useObserver from "./hooks";
import React from "react";

function observer(component) {
  console.log("component:", component);
  const wrappedComponent = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useObserver(() => component(props));
  };

  // eslint-disable-next-line no-undef
  const menoComponent = React.memo(wrappedComponent);

  return menoComponent;
}

export default observer;
