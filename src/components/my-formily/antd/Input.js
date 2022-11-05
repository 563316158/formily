const Input = (props) => {
  // console.log("Input props:", props);
  return (
    <input
      {...props}
      value={props.value || ""}
      style={{ ...props.style, border: "1px solid green" }}
    />
  );
};

export default Input;
