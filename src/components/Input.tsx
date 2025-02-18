type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const Input = ({ handleChange, value }: Props) => {
  return (
    <>
      <input type="text" className="input" onChange={handleChange} value={value} />
    </>
  )
};
