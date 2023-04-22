import { useEffect, useRef, useState } from "react"
import { INumerator } from "../Types/numerator.interface"
import { ILessons, ISchedule } from "../Types/schedule.interface"
import { Header } from "../components/Header"
import { Loader } from "../components/Loader"
import {
  getNumerator,
  getSchedule,
  setNumerator,
  settingsForGetNumerator,
  settingsForGetSchedule,
  settingsOfDbForSetNumerator,
} from "../firebase"
import { Schedule, useIntervalUpdate } from "./../components/Schedule"
import styles from "./SchedulePage.module.scss"
import { NumeratorContext } from "./context"

export const SchedulePage = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [schedules, setSchedules] = useState<ISchedule>({})
  const [currentLessons, setCurrentLessons] = useState<ILessons[]>()
  const numeratorRef = useRef<boolean>(false)

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

  useEffect(() => {
    getNumerator(settingsForGetNumerator).then((response) => {
      const numeratorData = response as INumerator

      numeratorRef.current = numeratorData["numerator"]
      setNumerator({ ...settingsOfDbForSetNumerator, ...numeratorData })
    })
  }, [])

  // setSchedule(settingsForSetSchedule)

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentLessons(schedules[e.target.value])
  }
  useIntervalUpdate()

  return (
    <NumeratorContext.Provider value={{ numeratorRef }}>
      <div className={styles.root}>
        <Header groups={Object.keys(schedules)} onChange={onChange} />
        {loading ? <Loader /> : <Schedule currentLessons={currentLessons} />}
      </div>
    </NumeratorContext.Provider>
  )
}
