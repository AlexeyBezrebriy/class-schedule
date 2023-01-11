import { ReactNode } from "react"
import styles from "./DropDown.module.scss"

type groupsProps = {
  groups: string[]
  onChange: Function
}

function displayGroupOptions(groups: string[]): ReactNode {
  return groups.map((value) => {
    return (
      <option key={value} className={styles.item}>
        {value}
      </option>
    )
  })
}

function DropDown({ groups, onChange }: groupsProps) {
  return (
    <div>
      <select
        id="listOfGroup"
        title="group"
        className={styles.select}
        onChange={(event) => onChange(event)}
      >
        {displayGroupOptions(groups)}
      </select>
    </div>
  )
}

export { DropDown }
