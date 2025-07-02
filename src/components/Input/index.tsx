interface TInput {
  inputType: 'text' | 'password' | 'email';
  onChange: (e: string) => void;
  value: string;
  placeholder: string;
};

const Input = (props: TInput) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <input
      type={props.inputType}
      placeholder={props.placeholder}
      onChange={(e) => onChange(e)}
      value={props.value}
      className="mt-1 w-full rounded-full px-4 py-2 bg-gray-100 outline-none"
    />
  )
};

export default Input;