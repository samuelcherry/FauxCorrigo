import Button from "./Button";

const ButtonTray = () => {
  return (
    <>
      <div className=" flex justify-center">
        <div className="flex justify-center items-center">
          <Button color="green" text="low" />
          <Button color="yellow" text="medium" />
          <Button color="orange" text="high" />
          <Button color="red" text="urgent" />
        </div>
      </div>
    </>
  );
};

export default ButtonTray;
