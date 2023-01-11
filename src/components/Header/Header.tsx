import { DropDown } from "../DropDown"
import styles from "./Header.module.scss"

type groupsProps = {
  groups: string[]
  onChange: Function
}

function Header({ groups, onChange }: groupsProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Schedule</h1>
      <DropDown
        groups={groups}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          onChange(event)
        }}
      />
    </header>
  )
}

export { Header }
