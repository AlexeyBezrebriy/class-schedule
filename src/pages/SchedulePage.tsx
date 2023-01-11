import { useEffect, useState } from "react"
import { ILessons, ISchedule } from "../Types/schedule.interface"
import { schedule } from "../assets/data/shcedule"
import { Header } from "../components/Header"
import { Schedule } from "./../components/Schedule"
import styles from "./SchedulePage.module.scss"

type Props = {}

const groups: string[] = schedule.map((value) => value.group)

export default function SchedulePage({}: Props) {
  const [currentGroup, setCurrentGroup] = useState<string>("")
  const [currentSchedule, setCurrentSchedule] = useState<ILessons[]>()

  function changeCurrentSchedule(schedule: ISchedule[], currentGroup: string) {
    for (let i = 0; i < schedule.length; i++) {
      if (schedule[i].group === currentGroup) {
        setCurrentSchedule(schedule[i].lessons)
      }
    }
  }

  useEffect(() => {
    const selectElem = document.getElementById(
      "listOfGroup"
    ) as HTMLSelectElement
    setCurrentGroup(selectElem.value)
    changeCurrentSchedule(schedule, selectElem.value)
  }, [currentGroup])

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setCurrentGroup(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <Header
        groups={groups}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          onChange(event)
        }}
      />
      <Schedule currentSchedule={currentSchedule} />
    </div>
  )
}
