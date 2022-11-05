import { ISchedule } from "../Types/schedule.interface"

export const schedule: ISchedule[] = [
  {
    group: "2222",
    lessons: [
      {
        'Вівторок': [
          {
            daytime: "9:30",
            title: "Стандарт.прог.систем",
            parity: false,
            link: "https://us05web.zoom.us/j/84118575752?pwd=NXUyYUtvZW9iKzBVYmczMEdHMlRsZz09",
            teacher: {
              name: "доц.Івченко Ю.М.",
            },
          },
          {
            daytime: "11:00",
            title: "Розробка екс.та інтел. систем",
            link: "https://us02web.zoom.us/j/84270269823?pwd=eXA2dXByK1pxQmlhTTc4ek1lYmhvdz09",
            teacher: {
              name: "проф.Скалозуб В.В.",
            },
          },
          {
            daytime: "13:00",
            title: "Розробка екс.та інтел. систем(практика)",
            link: "https://us04web.zoom.us/j/2630365337?pwd=R0dTSjJjOU0wSnREdEtySnVKVXFjdz09",
            teacher: {
              name: "доц.Іванов О.П.",
            },
          }
        ]
      },
    ]
  },
]
