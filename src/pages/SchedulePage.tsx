import { useState } from "react"
import { ILessons } from "../Types/schedule.interface"
import { schedule as schedules } from "../assets/data/shcedule"
import { Header } from "../components/Header"
import { Schedule } from "./../components/Schedule"
import styles from "./SchedulePage.module.scss"

export const SchedulePage = () => {
  const [currentLessons, setCurrentLessons] = useState<ILessons[]>(schedules[Object.keys(schedules)[0]])

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentLessons(schedules[e.target.value]);
  }
  
  return (
    <div className={styles.root}>
      <Header
        groups={Object.keys(schedules)}
        onChange={onChange}
      />
      <Schedule currentLessons={currentLessons} />
    </div>
  )
}
