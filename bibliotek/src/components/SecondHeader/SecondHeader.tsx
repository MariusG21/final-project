import styles from "./SecondHeader.module.css";

type SecondHeaderType = {
  title: string;
};

export function SecondHeader({ title }: SecondHeaderType) {
  return <header className={styles["header"]}>{title}</header>;
}
