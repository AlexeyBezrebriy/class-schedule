import { ReactElement } from "react"
import type { ILessons } from "../../Types/schedule.interface"
import styles from "./Schedule.module.scss"

interface IScheduleProp {
  currentLessons?: ILessons[]
}

export const Schedule = ({ currentLessons }: IScheduleProp): ReactElement => (
  <main className={styles.root}>
    <div className={styles.items}>
      {currentLessons?.map((lessons) =>
        Object.entries(lessons).map(([day, lessons]) => (
          <div key={day} className={styles.item}>
            <p className={styles.day}>{day}</p>
            <div className={styles.lessons}>
              {lessons.map((lesson) => {
                return (
                  <div key={lesson.daytime} className={styles.lesson_Flex}>
                    <div className={styles.time}>{lesson.daytime}</div>
                    <div className={styles.lesson_Item}>
                      <div className={styles.main_Lesson}>
                        <a
                          className={styles.link}
                          target="_blank"
                          href={lesson.link}
                          rel="noopener noreferrer"
                        >
                          {lesson.title}
                        </a>
                        <p className={styles.teacher}>{lesson.teacher.name}</p>
                      </div>
                      {lesson.alternativeTitle ? (
                        <div className={styles.alternative_Lesson}>
                          <a
                            className={styles.link}
                            target="_blank"
                            href={lesson.alternativeLink}
                            rel="noopener noreferrer"
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
        ))
      )}
    </div>
  </main>
)
