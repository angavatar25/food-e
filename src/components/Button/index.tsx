interface TButton {
  text: string;
  bgColor?: string;
  textColor?: string;
  bordered?: boolean;
}

const Button = (props: TButton) => {
  const { bgColor: bgColorProps, textColor: textColorProps, bordered } = props;

  const customClass = () => {
    const initial = [];

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
    <button className={`w-full py-3 ${customClass()} font-bold rounded-full shadow-md outline-none font-bebas`}>
      {props.text}
    </button>
  )
};

export default Button;