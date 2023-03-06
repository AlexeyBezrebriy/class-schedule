import { Firestore, doc, setDoc } from "firebase/firestore"

export type SetNumeratorProps = {
  db: Firestore
  collection: string
  documentID: string
  numerator: boolean
  writeRule: boolean
}

export const setNumerator = async ({
  db,
  collection,
  documentID,
  numerator,
  writeRule,
}: SetNumeratorProps) =>
{
  const currentDate = new Date()
  const currentDay = currentDate.getDay()

  if (writeRule && currentDay === 0)
  {
    await setDoc(doc(db, collection, documentID), {
      'numerator': !numerator,
      'writeRule': false,
    })
  } else if (currentDay === 6)
  {
    await setDoc(doc(db, collection, documentID), {
      'numerator': numerator,
      'writeRule': true,
    })
  }
}
