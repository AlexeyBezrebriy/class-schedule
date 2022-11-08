import styles from "./DropDown.module.scss"

type Props = {}

function DropDown({}: Props) {
  return (
    <div>
      <select title="group" className={styles.select}>
        <option className={styles.item}>група 2222</option>
        <option className={styles.item}>група 2221</option>
      </select>
    </div>
  )
}

export { DropDown }
