type Props = {
  text: string;
};

export const Button = ({ text }: Props) => {
  return <button type="button" className="button">{text}</button>;
};