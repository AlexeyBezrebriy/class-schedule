import { ILesson, Day } from "../../Types/schedule.interface"
import { isActiveLesson } from "./utils"
import styles from "./Lesson.module.scss"

type LessonProps = {
  lesson: ILesson
  day: Day
}

export const Lesson = ({ day, lesson }: LessonProps) => (
  <div
    key={lesson.time}
    className={styles.root}
    data-active={String(isActiveLesson(day, lesson.time))}
  >
    <div className={styles.time}>{lesson.time}</div>
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
          <p className={styles.teacher}>{lesson.alternativeTeacher?.name}</p>
        </div>
      ) : null}
    </div>
  </div>
)
