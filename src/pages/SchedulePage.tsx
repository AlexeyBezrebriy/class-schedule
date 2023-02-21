import { useEffect, useState } from "react"
import { ILessons, ISchedule } from "../Types/schedule.interface"
import { Header } from "../components/Header"
import { Loader } from "../components/Loader"
import {
  getSchedule,
  setSchedule,
  settingsForGetSchedule,
  settingsForSetSchedule,
} from "../firebase"
import { Schedule } from "./../components/Schedule"
import styles from "./SchedulePage.module.scss"

export const SchedulePage = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [schedules, setSchedules] = useState<ISchedule>({})
  const [currentLessons, setCurrentLessons] = useState<ILessons[]>()

  useEffect(() => {
    getSchedule(settingsForGetSchedule)
      .then((response) => {
        const scheduleData = response as ISchedule
        setSchedules(scheduleData)
        setLoading(false)
        setCurrentLessons(scheduleData[Object.keys(scheduleData)[0]])
      })
      .catch((reason) => console.error(reason))
  }, [])

  // setSchedule(settingsForSetSchedule)

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentLessons(schedules[e.target.value])
  }

  return (
    <div className={styles.root}>
      <Header groups={Object.keys(schedules)} onChange={onChange} />
      {loading ? <Loader /> : <Schedule currentLessons={currentLessons} />}
    </div>
  )
}
