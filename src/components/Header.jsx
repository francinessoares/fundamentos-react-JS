import styles from "./header.module.css";

import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <>
      <strong className={styles.header}>
        <img src={igniteLogo} alt="logo" />
        Ignite Feed
      </strong>
    </>
  );
}
