const Button = (props) => {
  return (
    <button
      className={`${props.height} ${props.padding} ${props.class}  bg-primary px-4  font-black`}
    >
      {props.title}
    </button>
  );
};

export default Button;
