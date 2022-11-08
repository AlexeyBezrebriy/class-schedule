import { DropDown } from "../DropDown"
import styles from "./Header.module.scss"

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Schedule</h1>
      <DropDown />
    </div>
  )
}

export { Header }
