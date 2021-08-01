import styles from "./Button.module.css";

interface IButton {
  label: string;
}

const Button = ({ label }: IButton) => {
  return (
    <button type="button" className={styles.button}>
      {label}
    </button>
  );
};

export default Button;
