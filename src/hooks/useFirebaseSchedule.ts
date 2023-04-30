import { useEffect, useRef, useState } from "react"
import { ILessons, ISchedule } from "../Types/schedule.interface"
import { getSchedule, settingsForGetSchedule } from "../firebase"


export type Data = [React.MutableRefObject<ISchedule>, React.MutableRefObject<ILessons[] | undefined>]

export const useFirebaseSchedule = (): Data =>
{
  const schedulesRef = useRef<ISchedule>({})
  const currentLessonsRef = useRef<ILessons[]>()
  const [isUpdated, setIsUpdated] = useState(false)

  useEffect(() =>
  {
    getSchedule(settingsForGetSchedule)
      .then((response) =>
      {
        const scheduleData = response as ISchedule

        schedulesRef.current = scheduleData
        currentLessonsRef.current = scheduleData[Object.keys(scheduleData)[0]]
        setIsUpdated(true)

        return [schedulesRef, currentLessonsRef]
      })
      .catch((reason) => console.error(reason))
  }, [isUpdated])
  return [schedulesRef, currentLessonsRef];
}
