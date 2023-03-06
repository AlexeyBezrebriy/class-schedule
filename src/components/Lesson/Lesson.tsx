import { useContext } from "react"
import { Day, ILesson } from "../../Types/schedule.interface"
import { NumeratorContext } from "../../pages/context"
import styles from "./Lesson.module.scss"
import { isActiveLesson, isMainLesson } from "./utils"

type LessonProps = {
  lesson: ILesson
  day: Day
}

export const Lesson = ({ day, lesson }: LessonProps) => {
  const { numeratorRef } = useContext(NumeratorContext)
  const alternativeLesson = Boolean(lesson.alternativeTitle)

  return (
    <div key={lesson.time} className={styles.root}>
      <div className={styles.time}>{lesson.time}</div>
      <div className={styles.lesson_Item}>
        <div
          className={styles.main_Lesson}
          data-active={
            isMainLesson(numeratorRef.current, alternativeLesson)
              ? String(isActiveLesson(day, lesson.time))
              : false
          }
        >
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
          <div
            className={styles.alternative_Lesson}
            data-active={
              !isMainLesson(numeratorRef.current, alternativeLesson)
                ? String(isActiveLesson(day, lesson.time))
                : false
            }
          >
            <a
              className={styles.link}
              target="_blank"
              href={lesson.alternativeLink}
              rel="noopener noreferrer"
            >
              {lesson.alternativeTitle}
            </a>
            <p className={styles.teacher}>{lesson.alternativeTeacher?.name}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
