import { useEffect, useRef } from "react"
import { INumerator } from "../Types/numerator.interface"
import { getNumerator, setNumerator, settingsForGetNumerator, settingsOfDbForSetNumerator } from "../firebase"


export const useFirebaseNumerator = () =>
{
  const numeratorRef = useRef<boolean>(false)

  useEffect(() =>
  {
    getNumerator(settingsForGetNumerator).then((response) =>
    {
      const numeratorData = response as INumerator

      numeratorRef.current = numeratorData["numerator"]
      setNumerator({ ...settingsOfDbForSetNumerator, ...numeratorData })
    })
  }, [])

  return numeratorRef
}