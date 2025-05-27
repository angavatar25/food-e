interface TButton {
  text: string;
  bgColor?: string;
  textColor?: string;
  bordered?: boolean;
  action: () => void;
}

const Button = (props: TButton) => {
  const { bgColor: bgColorProps, textColor: textColorProps, bordered } = props;

  const customClass = () => {
    const initial = ['w-full', 'py-3', 'font-bold', 'rounded-full', 'shadow-md', 'outline-none', 'font-bebas'];

    if (bgColorProps) {
      initial.push(bgColorProps)
    } else {
      initial.push('bg-white');
    }

    if (textColorProps) {
      initial.push(textColorProps)
    } else {
      initial.push('text-teal-400')
    }

    if (bordered) {
      initial.push('border-2 border-teal-400')
    }

    return initial.join(" ");
  };
 
  return (
    <button className={`${customClass()}`} onClick={props.action}>
      {props.text}
    </button>
  )
};

export default Button;