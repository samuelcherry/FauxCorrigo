interface ButtonProps {
  color: "green" | "yellow" | "orange" | "red";
  text: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
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

const Button = ({
  color,
  text,
  count,
  onIncrement,
  onDecrement,
}: ButtonProps) => {
  const styles = colorMap[color];
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <button
          className={`${styles.base} text-white px-10 py-5 m-4 text-xl font-bold 
            drop-shadow-lg rounded-lg 
            ${styles.hover} hover:scale-105 
            active:scale-95 
            transition-all duration-150`}
          onClick={onIncrement}
        >
          {text}
        </button>
        <div className="flex justify-center p-4">{count}</div>
        <button
          className="bg-blue-400 text-white px-10 py-5 m-4 text-xl font-bold
            rounded-lg drop-shadow-lg
            hover:bg-blue-600 hover:scale-105
            active:scale-95
            transition-all duration-150"
          onClick={onDecrement}
        >
          Resolve
        </button>
      </div>
    </>
  );
};

export default Button;
