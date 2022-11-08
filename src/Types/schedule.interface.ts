type daytime = "8:00" | "9:30" | "11:00" | "13:00" | "14:30" | "16:00"

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
  daytime: daytime
  teacher: ITeacher
}

interface ILessons
{
  [day: string]: ILesson[]
}

export interface ISchedule
{
  group: string
  lessons: ILessons[]
}
