import { ILesson, Day as TDay } from "../../Types/schedule.interface"
import { Lesson } from "../Lesson"
import styles from "./Day.module.scss"

type DayProps = {
  day: TDay
  lessons: ILesson[]
}

export const Day = ({ day, lessons }: DayProps) => (
  <div className={styles.root}>
    <p className={styles.day}>{day}</p>
    <div className={styles.lessons}>
      {lessons.map((lesson, index) => (
        <Lesson key={index} day={day} lesson={lesson} />
      ))}
    </div>
  </div>
)
