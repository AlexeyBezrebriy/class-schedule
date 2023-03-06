import { Firestore, doc, setDoc } from "firebase/firestore";
import { ISchedule } from "../../Types/schedule.interface";

export type SetScheduleProps = {
  db: Firestore,
  collection: string,
  documentID: string,
  schedule: ISchedule
}

export const setSchedule = async ({ db, collection, documentID, schedule }: SetScheduleProps) =>
{
  await setDoc(doc(db, collection, documentID), schedule);
}
