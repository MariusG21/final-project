import { SeparatorLine } from "@/components/SeparatorLine/SeparatorLine";
import styles from "./ModalDetails.module.css";

type ModalDetailsProps = {
  title: string;
  subtitle: string;
};

export default function ModalDetails({ title, subtitle }: ModalDetailsProps) {
  return (
    <>
      <h1 className={styles["modal-title"]}>{title}</h1>
      <h2 className={styles["modal-subtitle"]}>{subtitle}</h2>
      <SeparatorLine />
    </>
  );
}
