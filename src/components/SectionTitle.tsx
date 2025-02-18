type Props = {
  title: string;
  className?: string;
};

export const SectionTitle = ({ title, className }: Props) => {
  return <h2 className={`section-title ${className}`}>{title}</h2>;
};

// export const SectionTitle = (props: Props) => {
//   const { title, className } = props;

//   return <h2 className={`section-title ${className}`}>{title}</h2>;
// };
