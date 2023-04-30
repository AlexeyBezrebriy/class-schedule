import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { Loader } from "../components/Loader"
import {
  useFirebaseNumerator,
  useFirebaseSchedule,
  useLocalStorage,
} from "../hooks"
import { Schedule, useIntervalUpdate } from "./../components/Schedule"
import styles from "./SchedulePage.module.scss"
import { NumeratorContext } from "./context"

export const SchedulePage = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [isGroupUpdated, setIsGroupUpdated] = useState(false)
  const [schedulesRef, currentLessonsRef] = useFirebaseSchedule()
  const [storage, setStorage] = useLocalStorage([], "group")
  const numeratorRef = useFirebaseNumerator()

  useEffect(() => {
    if (currentLessonsRef.current) {
      setLoading(false)
      setIsGroupUpdated(false)
      if (storage.length === 0) {
        setStorage(Object.keys(schedulesRef.current))
      }
    }
  }, [currentLessonsRef.current, isGroupUpdated])

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const group = e.target.value as keyof typeof schedulesRef.current
    let groups = [group as string, ...Object.keys(schedulesRef.current)]
    groups = [...new Set(groups)]
    setStorage(groups)

    if (schedulesRef.current) {
      currentLessonsRef.current = schedulesRef.current[group]
      setIsGroupUpdated(true)
    }
  }
  useIntervalUpdate()

  return (
    <NumeratorContext.Provider value={{ numeratorRef }}>
      <div className={styles.root}>
        <Header groups={storage} onChange={onChange} />
        {loading ? (
          <Loader />
        ) : (
          <Schedule currentLessons={currentLessonsRef.current} />
        )}
      </div>
    </NumeratorContext.Provider>
  )
}
