import type { ILessons, Day as TDay } from "../../Types/schedule.interface"
import { Day } from "../Day"
import styles from "./Schedule.module.scss"
import { useIntervalUpdate } from "./useIntervalUpdate"

interface IScheduleProp {
  currentLessons?: ILessons[]
}

export const Schedule = ({ currentLessons }: IScheduleProp) => {
  useIntervalUpdate()

  return (
    <main className={styles.root}>
      <div>
        {currentLessons?.map((lessons) =>
          Object.entries(lessons).map(([day, lessons]) => (
            <Day key={day} day={day as TDay} lessons={lessons} />
          ))
        )}
      </div>
    </main>
  )
}
