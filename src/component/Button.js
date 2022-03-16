const Button = ({ name, event }) => {
  return <button onClick={event}>{name}</button>;
};

export default Button;
