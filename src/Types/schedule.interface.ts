interface ITeacher {
  name: string
  email?: string
  contact?: number
}

type day = "Понеділок" | "Вівторок" | "Среда" | "Четвер" | "П'ятниця"

export interface ISchedule {
  day: day
  lessons: string
  link: string
  time: string
  teacher: ITeacher
}
