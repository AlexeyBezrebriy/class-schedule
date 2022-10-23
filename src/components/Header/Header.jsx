import styles from "./Header.module.scss"

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Schedule</h1>
      <div>
        <select className={styles.select}>
          <option className={styles.item}>група 2222</option>
          <option className={styles.item}>група 2221</option>
        </select>
      </div>
    </div>
  )
}

export { Header }
