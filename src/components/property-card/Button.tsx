import { MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface IButton {
  action: "add" | "remove";
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ action, onClick }: IButton) => {
  return (
    <button
      type="button"
      className={
        action === "add"
          ? styles.add_property_button
          : styles.remove_property_button
      }
      onClick={onClick}
    >
      {action === "add" ? "Add property" : "Remove property"}
    </button>
  );
};

export default Button;
