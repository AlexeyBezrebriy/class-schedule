import { LESSON_DURATION, MINUTES_PER_HOUR, DAYS_MAP } from "./constants";
import { Day } from "../../Types/schedule.interface";

export const isActiveLesson = (day: Day, lessonTime: string) => {
  const [lessonHours, lessonMinutes] = lessonTime.split(':').map(Number);
  const currentDate = new Date();
  const isDayMatch = DAYS_MAP[day] === currentDate.getDay();

  if (!isDayMatch) return false;

  const currentTimeInMinutes = currentDate.getHours() * MINUTES_PER_HOUR + currentDate.getMinutes();
  const lessonTimeInMinutes = lessonHours * MINUTES_PER_HOUR + lessonMinutes;
  const timeDifference = currentTimeInMinutes - lessonTimeInMinutes;
  const withinRange = timeDifference >= 0 && timeDifference < LESSON_DURATION;

  return withinRange;
};
