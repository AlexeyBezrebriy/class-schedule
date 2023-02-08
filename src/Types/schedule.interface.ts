type Time = "8:00" | "9:30" | "11:00" | "13:00" | "14:30" | "16:00"
type Day = "Понеділок" | "Вівторок" | "Середа" | "Четвер" | "Пʼятниця" | "Субота"

interface ITeacher
{
  name: string
  email?: string
  contact?: number
}

interface ILesson
{
  title: string
  alternativeTitle?: string
  alternativeLink?: string
  link: string
  time: Time
  teacher: ITeacher
  alternativeTeacher?: ITeacher
  active?: boolean;
}

interface ILessons
{
  [day: string]: ILesson[]
}

interface ISchedule
{
  [group: string]: ILessons[]
}

export type { ISchedule, ILessons, ILesson, Day }

