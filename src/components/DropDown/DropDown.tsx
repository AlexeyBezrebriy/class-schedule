import { ChangeEventHandler } from "react"
import styles from "./DropDown.module.scss"

type DropdownProps = {
  groups: string[]
  onChange: ChangeEventHandler<HTMLSelectElement>
}

export const DropDown = ({ groups, onChange }: DropdownProps) => (
  <div>
    <select
      id="listOfGroup"
      title="group"
      className={styles.root}
      onChange={onChange}
    >
      {groups.map((value) => (
        <option key={value} className={styles.item}>
          {value}
        </option>
      ))}
    </select>
  </div>
)
