import { ReactNode } from "react"
import type { ILessons } from "../../Types/schedule.interface"
import styles from "./Schedule.module.scss"

interface IScheduleProp {
  currentSchedule: ILessons[] | undefined
}

function displaySchedule({ currentSchedule }: IScheduleProp): ReactNode {
  if (currentSchedule) {
    return currentSchedule.map((lessons) => {
      return Object.keys(lessons).map((day, index) => {
        return (
          <div key={day} className={styles.item}>
            <p className={styles.day}>{day}</p>
            <div className={styles.lessons}>
              {Object.values(lessons)[index].map((lesson) => {
                return (
                  <div key={lesson.daytime} className={styles.lesson_Flex}>
                    <div className={styles.time}>{lesson.daytime}</div>
                    <div className={styles.lesson_Item}>
                      <div className={styles.main_Lesson}>
                        <a target="_blank" href={lesson.link} rel="noreferrer">
                          {lesson.title}
                        </a>
                        <p className={styles.teacher}>{lesson.teacher.name}</p>
                      </div>
                      {lesson.alternativeTitle ? (
                        <div className={styles.alternative_Lesson}>
                          <a
                            target="_blank"
                            href={lesson.alternativeLink}
                            rel="noreferrer"
                          >
                            {lesson.alternativeTitle}
                          </a>
                          <p className={styles.teacher}>
                            {lesson.alternativeTeacher?.name}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })
    })
  }
}

export default function Schedule({ currentSchedule }: IScheduleProp) {
  return (
    <main className={styles.container}>
      <div className={styles.items}>{displaySchedule({ currentSchedule })}</div>
    </main>
  )
}

export { Schedule }
