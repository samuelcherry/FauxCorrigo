import { useState } from "react";

interface ButtonProps {
  color: "green" | "yellow" | "orange" | "red";
  text: string;
}

const colorMap = {
  green: {
    base: "bg-green-500",
    hover: "hover:bg-green-600",
  },
  yellow: {
    base: "bg-yellow-400",
    hover: "hover:bg-yellow-500",
  },
  orange: {
    base: "bg-orange-500",
    hover: "hover:bg-orange-600",
  },
  red: {
    base: "bg-red-500",
    hover: "hover:bg-red-600",
  },
};

const Button = ({ color, text }: ButtonProps) => {
  const styles = colorMap[color];
  const [count, setCount] = useState(0);

  const incrementCount = (e) => {
    setCount(function (prevCount) {
      return prevCount + 1;
    });
  };
  return (
    <>
      <button
        className={`${styles.base}  text-white px-10 py-5 m-4 text-xl font-bold 
            drop-shadow-lg rounded-lg 
            ${styles.hover} hover:scale-105 
            active:scale-95 
            transition-all duration-150`}
        onClick={incrementCount}
      >
        {text}
      </button>
      <div>{count}</div>
    </>
  );
};

export default Button;
