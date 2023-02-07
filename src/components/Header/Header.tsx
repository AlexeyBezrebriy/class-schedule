import { ChangeEventHandler } from "react"
import { DropDown } from "../DropDown"
import styles from "./Header.module.scss"

type HeaderProps = {
  groups: string[]
  onChange: ChangeEventHandler<HTMLSelectElement>
}

export const Header = ({ groups, onChange }: HeaderProps) => (
  <header className={styles.root}>
    <h1 className={styles.title}>Schedule</h1>
    <DropDown groups={groups} onChange={onChange} />
  </header>
)
