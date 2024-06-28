import "./Label.styl";

type LabelProps = {
  text: string;
};

const Label = ({ text }: LabelProps): JSX.Element => {
  return <p className="button_text">{text}</p>;
};

export default Label;
