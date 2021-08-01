import styles from "./Button.module.css";

interface IButton {
  action: "add" | "remove";
}

const Button = ({ action }: IButton) => {
  return (
    <button
      type="button"
      className={
        action === "add"
          ? styles.add_property_button
          : styles.remove_property_button
      }
    >
      {action === "add" ? "Add property" : "Remove property"}
    </button>
  );
};

export default Button;
