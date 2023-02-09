import styles from "./styles.module.css";

const HamburgerIcon = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <div className={styles.hamburger}>
        <div className={styles.hamburgerContainer}>
          <div className={styles.hamburgerInner}></div>
          <div className={styles.hamburgerHidden}></div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerIcon;
