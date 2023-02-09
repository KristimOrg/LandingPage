import styles from "./Styles.module.css";

const CloseIcon = () => {
  return (
    <div>
      <a href="#" className={styles.closeButton}>
        <div className={styles.in}>
          <div className={styles.closeButtonBlock}></div>
          <div className={styles.closeButtonBlock}></div>
        </div>
        <div className={styles.out}>
          <div className={styles.closeButtonBlock}></div>
          <div className={styles.closeButtonBlock}></div>
        </div>
      </a>
    </div>
  );
};

export default CloseIcon;
