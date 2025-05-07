type Props = {
  title: string;
  className?: string;
};

export const SectionTitle = ({title, className}: Props) => {
  return <h2 className={`section-title ${className}`}>{title}</h2>;
};
